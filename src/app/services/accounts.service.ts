import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {AccountDetails, AccountOperation} from "../model/account.model";
@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) { }
  public getAccount(accountId : String,page:number,size : number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }
  public debit(accountId : string, amount : number, description : string){
    let data={accountId : accountId,amount : amount, description : description}
    return this.http.post(environment.backendHost+"/account/debit",data);
  }
  public credit(accountId : string, amount : number, description : string){
    let data={accountId : accountId,amount : amount, description : description}
    return this.http.post(environment.backendHost+"/account/credit",data);
  }
  public transfer(accountSource : string, accountDestination : string, amount : number, description :string){
    let data={accountSource, accountDestination, amount, description}
    return this.http.post(environment.backendHost+"/account/transfer",data);
  }

}
