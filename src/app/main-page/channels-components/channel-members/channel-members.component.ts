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
    console.log('data', data);
    
    this.usermenbers = data.members;
    this.selectedChannel = data.channel;
    this.channelName = data.channelName;
  }

  ngOnInit(): void {}

  /**
   * Closes the dialog for members of the channel.
   */
  closeMembers() {
    this.dialogRef.close();
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
