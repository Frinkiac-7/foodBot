import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SupabaseClient, createClient, AuthChangeEvent, Session } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SbauthService {

  private sb: SupabaseClient;

  constructor() {
    this.sb = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  rawLoad: boolean = true;

  get user() {
    return this.sb.auth.getUser();
  }

  get session() {
    return this.sb.auth.getSession();
  }

  async getSession() {
    const sessionData = await this.sb.auth.getSession();
    return sessionData;
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.sb.auth.onAuthStateChange(callback);
  }

  signIn(email: string, password: string) {
    return this.sb.auth.signInWithPassword({ email, password });
  }

  signUp(email: string, password: string) {
    return this.sb.auth.signUp({ email, password });
  }

  signOut() {
    return this.sb.auth.signOut();
  }

}
