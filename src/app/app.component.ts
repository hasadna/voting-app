import { Component } from '@angular/core';
import { JSEncrypt } from 'jsencrypt';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public_key=`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7vbinNPnt1Xvl5mXWqcA
cPQpfI5gHqd3J5/auiPiqB1IkA0FQ5Tts7YkAa+1bEAHLmC38wKcuRcdTnN22Syz
KbEFe/SjQbvpsn+6iV8dMa+2qqv06dLAceB0lD642iFhYv8UjOnZKbzHozgfiHEe
1Fi1Lmr6a6islS8pCAnUS0s/68SHyjCm47ubVTUw+8bywrB7wvQlLKBtc+V1K9US
8i+LZTMh0zGs8vgRezIM/9uI8+YdCk/mOfzX55iPUTIigyZu0qDAs/zhVOnb+Ppq
bVO7Y28s9QnMtY7/gg2BtjXgXadh4kJsqhO5XFMI6+yd0sLaryb4Zinpt7YIeL/q
qwIDAQAB
-----END PUBLIC KEY-----`;
  encrypted = '';
  dummy_bio='לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.';
  dummy_q1=' הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.';
  dummy_q2=' נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי לורם איפסום דולור סיט אמט, קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי. ';
  dummy_q3=' סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.';
  dummy_photo='assets/img/profile.png'
  names = [];
  vote = [];
  crypt = new JSEncrypt();
  randId = 0;
  swiperConfig: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop: true,
  };

  constructor() {
    this.crypt.setPublicKey(this.public_key);
    for (let i = 0 ; i < 17 ; i++ ) {
      this.names.push({
        index: i,
        name: 'name ' + i,
        bio: this.dummy_bio,
        q1: this.dummy_q1,
        q2: this.dummy_q2,
        q3: this.dummy_q3,
        photo: this.dummy_photo
      });
      this.vote.push(false);
    }
    this.randId = Math.floor(Math.random() * 9000000) + 1000000;
    this.swiperConfig.initialSlide = Math.floor(Math.random() * this.names.length);
  }

  encrypt() {
    console.log(this.vote);
    this.encrypted = this.crypt.encrypt(this.randId + '|' + JSON.stringify(this.vote));
  }
}
