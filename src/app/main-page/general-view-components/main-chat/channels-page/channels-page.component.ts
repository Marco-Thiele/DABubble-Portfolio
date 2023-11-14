import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ChannelEditComponent } from 'src/app/main-page/channels-components/channel-edit/channel-edit.component';
import { ChannelMembersComponent } from 'src/app/main-page/channels-components/channel-members/channel-members.component';
import { AddChannelMembersComponent } from 'src/app/main-page/channels-components/add-channel-members/add-channel-members.component';
import { Firestore, collection, getDocs, onSnapshot } from '@angular/fire/firestore';
import { EmitOpenService } from 'src/app/services/emit-open.service';


@Component({
  selector: 'app-channels-page',
  templateUrl: './channels-page.component.html',
  styleUrls: ['./channels-page.component.scss'],
})
export class ChannelsPageComponent implements OnInit {
  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

  selectedChannel: any;
  members: any[] = [];
  autoScrollEnabled = true;
  usermembers: any[] = [];
  firestore: Firestore = inject(Firestore);

  constructor(
    private dialog: MatDialog,
    private sharedService: SharedService,
    private EmitOpenService: EmitOpenService
  ) {
    this.openChannelContainer(this.selectedChannel);
  }

  ngOnInit(): void {}

  /**
   * It is executed when the view is initialized
   */
  ngAfterViewChecked() {
    if (this.autoScrollEnabled) {
      this.scrollToBottom();
    }
  }

  /**
   * Opens the channel container
   * @param channel the channel to open
   */
  openChannelContainer(channel: any) {
    this.EmitOpenService.openChannelEvent$.subscribe((channel: any) => {
      this.selectedChannel = channel;
      this.members = channel.members;
      this.filterImg();
    });
  }

  /**
   * opens the channel container in the responsive view
   * @param channel the channel to open
   */
  openRespChannelContainer(channel: any) {
    this.EmitOpenService.openRespChannelEvent$.subscribe((channel: any) => {
      this.selectedChannel = channel;
    });
  }

  /**
   * Gets the messages of the channel
   * @param channel the channel to get the messages from
   */
  getMessages(channel: any) {
    return onSnapshot(this.sharedService.getChannelsFromFS(), (list: any) => {
      this.selectedChannel = [];
      list.forEach((element: any) => {
        const channelData = element.data();
        if (channelData.name === channel.name) {
          this.selectedChannel = channelData;
          this.selectedChannel.id = channel.id; 
        }
      });
    });
  }


  /**
   * Load the user img for the channel header 
   * 
   */
  async filterImg(){
    return onSnapshot(this.getUsersFromFS(), (list: any) => {
      this.usermembers = [];
      list.forEach((element: { data: () => any; } ) => {
        const channelData = element.data();
        this.membersForEach(channelData)
    });
    });
    }


    /**
     * Push names and images into an array that will be displayed
     * 
     * @param channelData Json from the backend
     */
    membersForEach(channelData:any){
      this.members.forEach(member => {
        if(member['name'].includes('(Du)')){
          member = member['name'].replace('(Du)','')
          }else
            member = member['name']  
      if (channelData.name.includes(member)) {
        if (!this.usermembers.find(user => user.name === member)) {
          const user = {
            name : channelData.name,
            img : channelData.photoURL,
          }
          this.usermembers.push(user)
        }   
      }
    });
    }


    /**
     * It is the Ref to the firestore collection
     * 
     */
    getUsersFromFS(){
      return collection(this.firestore, 'users');
    }


  /**
   * Scrolls to the bottom of the chat
   */
  scrollToBottom() {
    if (this.selectedChannel) {
      const chatElement = this.chatContainer.nativeElement;
      chatElement.scrollTop = chatElement.scrollHeight;
    }
  }

  /**
   * Shows the edit Channel component
   */
  editChannel(selectedChannel: any) {
    const dialogRef = this.dialog.open(ChannelEditComponent, {
      data: { selectedChannel },
    });
    this.EmitOpenService.setIsEditChannelOpen(true);

    dialogRef.afterClosed().subscribe(() => {
      this.EmitOpenService.setIsEditChannelOpen(false);
    });
  }

  /**
   * Gets the value of the edit channel component.
   * @returns true if the edit channel component is open, false otherwise
   */
  isEditChannelOpen(): boolean {
    return this.EmitOpenService.getIsEditChannelOpen();
  }

  /**
   * Shows the members component
   */
  showMembers() {
    const members = this.usermembers;
    const channel = this.selectedChannel;
    const channelName = this.selectedChannel.name;
    const dialogRef = this.dialog.open(ChannelMembersComponent, {
      data: { members, channel, channelName },
    });
  }

  /**
   * Shows the add members component
   */
  addMembers() {
    const members = this.usermembers;
    const dialogRef = this.dialog.open(AddChannelMembersComponent, {
      data: {
        selectedChannel: this.selectedChannel,
        members: this.members,
      },
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  /**
   * It is executed when the user scrolls
   */
  handleScroll(event: Event) {
    const chatElement = this.chatContainer.nativeElement;
    this.autoScrollEnabled =
      chatElement.scrollHeight - chatElement.scrollTop ===
      chatElement.clientHeight;
  }
}
