import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

// Register in another place
registerLocaleData(localeHr);
import localeHr from '@angular/common/locales/hr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
      @for(amount of amounts; track amount) {
        <h3>Amount: {{amount}}</h3>
        <p>{{ amount | currency }}</p> // Should work if LOCALE_ID is set to hr-HR
        <p>{{ amount | currency: 'EUR' }}</p>
        <p>{{ amount | currency: 'EUR':'symbol':'1.2-2':'hr-HR' }}</p>
        <p>{{ amount | currency: 'EUR':'symbol':'1.2-2':'hr-HR' }}</p>
        <p>{{ amount | currency: 'EUR':'symbol':'1.4-4':'hr-HR' }}</p>
        <p>{{ amount | currency: 'EUR':'symbol-narrow':'1.0-4':'hr-HR' }}</p>
        <p>{{ amount | currency: 'EUR':'code':'1.0-4':'hr-HR' }}</p>

        <p>{{ amount | currency: 'EUR':'symbol':'1.2-2':'en-US' }}</p>
      }
  `,
})
export class AppComponent {
  amounts = [0.05, 1.57, 4.32, 1, 12, 3949, 3450.13];
}
