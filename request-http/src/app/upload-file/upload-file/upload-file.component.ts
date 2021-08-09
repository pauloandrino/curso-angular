import {Component, OnInit} from '@angular/core';
import {UploadFileService} from "../upload-file.service";
import {environment} from "../../../environments/environment";
import {HttpEvent, HttpEventType, HttpProgressEvent} from "@angular/common/http";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File> = new Set<File>();
  progress = 0;

  constructor(private upload: UploadFileService) {
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.target.files;

    // document.getElementById('customFileLabel')!.innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name)
      this.files.add(selectedFiles[i]);
    }

    document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', ');

    this.progress = 0;

    // event.target.
  }

  /*
    // todo: Not Working: Check later
    onUpload() {
      if (this.files && this.files.size > 0) {
        this.upload.upload(this.files,  environment.BASE_URL + '/upload')
          .pipe(
            uploadProgress(progress => {
              console.log(progress);
              this.progress = progress;
            }),
            filterResponse()
          )
      }
    }
  */


  onUpload() {
    if (this.files && this.files.size > 0) {
      this.upload.upload(this.files, environment.BASE_URL + '/upload')
        .subscribe((event: HttpEvent<Object>) => {
          if (event.type === HttpEventType.Response) {
            console.log('Upload concluído');
          } else if (HttpEventType.UploadProgress) {
            let e = <HttpProgressEvent>event;
            let percentDone = Math.round((e.loaded * 100) / e.total!);
            console.log('Progresso', percentDone)
            this.progress = percentDone;
          }
        });
    }
  }

  OnDownloadExcel() {
    this.upload.download(environment.BASE_URL + '/downloadExcel')
      .subscribe((res: any) => {
        this.upload.handleFile(res, 'report.xlsx');
      });
  }

  onDownloadPDF() {
    this.upload.download(environment.BASE_URL + '/downloadPDF')
      .subscribe((res: any) => {
        this.upload.handleFile(res, 'report.pdf');
      });
  }

}
