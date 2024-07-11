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
    <section [style]="{ display: 'flex', 'flex-wrap': 'wrap' }">
      @for(amount of amounts; track amount) {
      <div [style]="{ width: '300px', padding: '36px' }">
        <h3>Amount: {{ amount }}</h3>
        <!--Should work if LOCALE_ID is set to hr-HR-->
        <p>{{ amount | currency }}</p>

        <b>Euro symbol:</b>
        <p>{{ amount | currency : 'EUR' }}</p>
        <p>{{ amount | currency : 'EUR' : 'symbol' : '1.2-2' : 'hr-HR' }}</p>
        <p>{{ amount | currency : 'EUR' : 'symbol' : '1.4-4' : 'hr-HR' }}</p>

        <b>Different symbol:</b>
        <p>
          {{ amount | currency : 'EUR' : 'symbol-narrow' : '1.0-4' : 'hr-HR' }}
        </p>
        <p>{{ amount | currency : 'EUR' : 'code' : '1.0-4' : 'hr-HR' }}</p>
        <p>{{ amount | currency : 'EUR' : 'CUSTOM' : '1.0-4' : 'hr-HR' }}</p>

        <b>USD locale:</b>
        <p>{{ amount | currency : 'USD' : 'symbol' : '1.2-2' : 'en-US' }}</p>
        <p>{{ amount | currency : 'EUR' : 'symbol' : '1.2-2' : 'en-US' }}</p>
      </div>
      }
    </section>
  `,
})
export class AppComponent {
  amounts = [0.05, 1.57, 4.32, 1, 12, 3949, 3450.13, 100, 2500.75, 9876.54, 0.99, 12345.67, 890.01, 765.43, 210.98];}
