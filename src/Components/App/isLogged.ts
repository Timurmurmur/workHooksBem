import { BehaviorSubject, Observable } from "rxjs";

export class isLogged {
  private authSubject = new BehaviorSubject<boolean>(false);

  setAuthState = (state: boolean) => {
    this.authSubject.next(state);
  };

  getStateChange(): Observable<boolean> {
    return this.authSubject.asObservable();
  }
  getCurrentState(): boolean {
    return this.authSubject.getValue();
  }
}
