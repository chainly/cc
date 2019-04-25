import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { HttpService } from '../../../shared/http/http.service';
import { UserBusinessService} from '../../../business-service/user/user-business.service';


@Component({
  selector: 'c-user-add',
  templateUrl: './user-add.component.html'
})

export class UserAddComponent {

  addForm: FormGroup;

  constructor(
    private router: Router,
    private appService: AppService,
    private toastService: ToastService,
    private httpService: HttpService,
    private userBusinessService: UserBusinessService,
    private formBuilder: FormBuilder) {
      let userNameFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15)]));
      let passwordFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(30)]));
      this.addForm = this.formBuilder.group({
        userName: userNameFc,
        password: passwordFc
      }),
      this.appService.titleEventEmitter.emit("用户添加");
  }

  useradd() {
    this.router.navigate(['/app/userAdd']);
    return;
    // let that = this;
    // if (this.addForm.valid) {
    //   this.httpService.get(
    //     this.userBusinessService.defaultUser(), {},
    //     function(successful, data, res){
    //       const toastCfg = new ToastConfig(ToastType.SUCCESS, '', data.resultMsg, 3000);
    //       that.toastService.toast(toastCfg);
    //       that.router.navigate(['/app/userAdd'])
    //     }
    //   );
    // }
  }
}