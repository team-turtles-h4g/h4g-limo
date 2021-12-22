import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileValidator } from 'ngx-material-file-input';
import { Pipe, PipeTransform } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { FullLoaderService } from 'src/app/services/full-loader.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit, AfterViewInit {

  @ViewChild("uploadDataForm") uploadDataForm: NgForm;
  uploadDataInput: any;
  /** Max file size upto 100 MB */
  readonly maxSize = 104857600;

  constructor(public dialogRef: MatDialogRef<UploadDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fullLoaderService: FullLoaderService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.uploadDataForm.control
        .get("gaPlanFileInput")
        .setValidators([FileValidator.maxContentSize(this.maxSize)]);
    }, 0);
  }

  onFileChange(event) {
    if (this.isFileAllowed(event.target.files[0].name, ["xlsx", "xls", "csv"])) {

    } else {
      this.uploadDataForm.controls["gaPlanFileInput"].setValue(null, {
        emitEvent: false,
      });
      event.srcElement.value = "";
      this.uploadDataInput = null;
      this.snack.open("File must be Excel or csv!", "OK", { duration: 4000 });
      return;
    }
  }

  isFileAllowed(fileName: string, alloweExt: any = []) {
    let isAllowed: boolean = false
    const extension = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2)
    if (undefined !== extension && null !== extension) {
      for (const ext of alloweExt) {
        if (ext.toLowerCase() == extension.toLowerCase()) {
          isAllowed = true
        }
      }
    }
    return isAllowed;
  }

  uploadFile() {
    this.fullLoaderService.showLoader("File uploading...");
    setTimeout(() => {
      this.uploadDataForm.controls["gaPlanFileInput"].setValue(null, {
        emitEvent: false,
      });
      this.uploadDataInput = null;
      this.snack.open("File uploaded successfully!", "OK", { duration: 4000 });
      this.fullLoaderService.hideLoader();
      this.dialogRef.close();
    }, 2000);
  }

}
