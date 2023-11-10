import { Component, OnInit, ViewEncapsulation, Inject, inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddChannelMembersComponent } from '../add-channel-members/add-channel-members.component';
import { SharedService } from 'src/app/services/shared.service';
import { Firestore, collection, getDocs, onSnapshot } from '@angular/fire/firestore';
import { Data } from '@angular/router';

@Component({
  selector: 'app-channel-members',
  templateUrl: './channel-members.component.html',
  styleUrls: ['./channel-members.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChannelMembersComponent implements OnInit {
  members: any[] = [];
  channelName: string = '';
  usermenbers: any[] = [];
  private selectedChannel: any;
  firestore: Firestore = inject(Firestore);

  constructor(
    public dialogRef: MatDialogRef<ChannelMembersComponent>,
    private dialog: MatDialog,
    private sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.members = data.members;
    this.selectedChannel = data.channel;
    this.channelName = data.channelName;
    console.log('members',this.members);
    console.log('selectedChannel',this.selectedChannel);
    this.filterImg()
  }

  ngOnInit(): void {}

  /**
   * Closes the dialog for members of the channel.
   */
  closeMembers() {
    this.dialogRef.close();
  }


  async filterImg(){
  return onSnapshot(this.getUsersFromFS(), (list: any) => {
    this.usermenbers = [];
    let i = 0
    list.forEach((element: { data: () => any; } ) => {
      const channelData = element.data();
      
      if (channelData.name === this.members[i]['name']) {
        const user = {
          name : channelData.name,
          img : channelData.photoURL,
        }
        this.usermenbers.push(user)
      }
      i++
    });
    console.log('user',this.usermenbers);
    
  });

  }

getUsersFromFS(){
  return collection(this.firestore, 'users');
}
  

  /**
   * Opens the dialog for adding members to the channel.
   */
  addMember() {
    const dialogRef = this.dialog.open(AddChannelMembersComponent, {
      data: {
        selectedChannel: this.selectedChannel,
        members: this.members,
      },
    });
    dialogRef.afterClosed().subscribe(() => {});
    this.dialogRef.close();
  }
}
