import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SupabaseClient, createClient, AuthChangeEvent, Session } from '@supabase/supabase-js';
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class SbdataService {

  private sbdata: SupabaseClient;

  constructor() {
    this.sbdata = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  rawLoad: boolean = true;

  async getMenuItems() {
    const { data, error } = await this.sbdata.from('t_items').select('item_id, item_name, item_desc, item_sign, item_status, price_id( price_pt, price_qt, price_sm, price_lg, price_md, price_ent), cat_id(cat_name, cat_desc, cat_notes)');

    if (error) {
      throw error;
    } else {
      this.rawLoad = false;
      data.forEach((element: any) => {
        Object.defineProperties(element, {
          'prices': {
            value: [],
            writable: true,
          }
        });
        let prices = Object.keys(_.omitBy(element['price_id'], v => v === null));
        prices.forEach(price => {
          if (price.includes('pt')) {
            element.prices.push({ 'id': 'Pint', 'price': element.price_id.price_pt });
          }
          if (price.includes('qt')) {
            element.prices.push({ 'id': 'Quart', 'price': element.price_id.price_qt });
          }
        });
      });
      return data;
    }
  }
  
}
