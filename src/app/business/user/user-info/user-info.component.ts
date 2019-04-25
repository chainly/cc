import { Component, OnInit } from '@angular/core';
import { UserBusinessService} from '../../../business-service/user/user-business.service';
import { AppService } from '../../../app.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { HttpService } from '../../../shared/http/http.service';

@Component({
  selector: 'c-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent {
  user:any = {};

  constructor(
    private appService: AppService,
    private toastService: ToastService,
    private httpService: HttpService,
    private userBusinessService: UserBusinessService,
    ) {
    this.appService.titleEventEmitter.emit("个人资料");
    }

  ngOnInit() {
    let that = this;
    this.httpService.get(
      this.userBusinessService.defaultUser(), {},
      function(successful, data, res){
        that.user = data;
      }
    );
  }
  
}

