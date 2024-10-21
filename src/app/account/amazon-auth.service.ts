import { Injectable } from "@angular/core";
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "@angular/fire/auth";
import { Router } from "@angular/router";


@Injectable({
    providedIn: "root"
})
export class AmazonAuthService{

    constructor(private auth: Auth, private router: Router){
        
    }


    isAuthentiacted(): boolean{
        return this.auth.currentUser !== null;
    }


    login(email: string, password: string){
        return signInWithEmailAndPassword(this.auth, email, password)
                .then(
                    res => {console.log(res);
                    this.router.navigate(["welcome"]);
                })
                .catch(err => console.log(err))
    }


    logout(){
        return signOut(this.auth)
                .then(r => this.router.navigate(["account/login"]))
                .catch(err => console.log(err))
    }


    signInByGoogle(email: string, password: string){
        return signInWithPopup(this.auth, new GoogleAuthProvider)
                .then(
                    res => {console.log(res);
                    this.router.navigate(["welcome"]);
                })
                .catch(err => console.log(err))
    }
}