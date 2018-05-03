import React from "react";
import { Input, InputGroup, InputGroupAddon, FormText } from "reactstrap";

export const EmailField = props => (
  <div>
    <InputGroup>
      <InputGroupAddon>
        <span className="input-group-text">@</span>
      </InputGroupAddon>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={props.value}
        onChange={event => props.onChangeValue(event)}
        required
        title="Please use a valid email address"
        pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.+(xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|travelersinsurance|northwesternmutual|xn--xkc2dl3a5ee0h|xn--mgberp4a5d4ar|xn--mgbai9azgqp6j|xn--bck1b9a5dre4c|xn--5su34j936bgsg|xn--3oq18vl8pn36a|xn--xkc2al3hye2a|xn--mgba7c0bbn0a|xn--fzys8d69uvgm|xn--nqv7fs00ema|xn--mgbc0a9azcg|xn--mgbaakc7dvf|xn--mgba3a4f16a|xn--lgbbat1ad8j|xn--kcrx77d1x4a|xn--i1b6b1a6a2e|sandvikcoromant|kerryproperties|americanexpress|xn--rvc1e0am3e|xn--mgbx4cd0ab|xn--mgbi4ecexp|xn--mgbca7dzdo|xn--mgbbh1a71e|xn--mgbb9fbpob|xn--mgbayh7gpa|xn--mgbaam7a8h|xn--mgba3a3ejt|xn--jlq61u9w7b|xn--h2breg3eve|xn--fiq228c5hs|xn--b4w605ferd|xn--80aqecdr1a|xn--6qq986b3xl|xn--54b7fta0cc|weatherchannel|kerrylogistics|cookingchannel|cancerresearch|bananarepublic|americanfamily|afamilycompany|xn--ygbi2ammx|xn--yfro4i67o|xn--tiq49xqyj|xn--h2brj9c8c|xn--fzc2c9e2c|xn--fpcrj9c3d|xn--eckvdtc9d|wolterskluwer|travelchannel|spreadbetting|lifeinsurance|international|xn--qcka1pmc|xn--ogbpf8fl|xn--ngbe9e0a|xn--ngbc5azd|xn--mk1bu44c|xn--mgbt3dhd|xn--mgbpl2fh|xn--mgbgu82a|xn--mgbab2bd|xn--mgb9awbf|xn--gckr3f0f|xn--8y0a063a|xn--80asehdb|xn--80adxhks|xn--45br5cyl|xn--3e0b707e|versicherung|scholarships|lplfinancial|construction|xn--zfr164b|xn--xhq521b|xn--w4rs40l|xn--vuq861b|xn--t60b56a|xn--ses554g|xn--s9brj9c|xn--rovu88b|xn--rhqv96g|xn--q9jyb4c|xn--pgbs0dh|xn--pbt977c|xn--nyqy26a|xn--mix891f|xn--mgbtx2b|xn--mgbbh1a|xn--kpu716f|xn--kpry57d|xn--kprw13d|xn--jvr189m|xn--j6w193g|xn--imr513n|xn--hxt814e|xn--h2brj9c|xn--gk3at1e|xn--gecrj9c|xn--g2xx48c|xn--flw351e|xn--fjq720a|xn--fct429k|xn--estv75g|xn--efvy88h|xn--d1acj3b|xn--czr694b|xn--cck2b3b|xn--9krt00a|xn--80ao21a|xn--6frz82g|xn--55qw42g|xn--45brj9c|xn--42c2d9a|xn--3hcrj9c|xn--3ds443g|xn--3bst00m|xn--2scrj9c|xn--1qqw23a|xn--1ck2e1b|xn--11b4c3d|williamhill|rightathome|redumbrella|progressive|productions|playstation|photography|olayangroup|motorcycles|lamborghini|kerryhotels|investments|foodnetwork|enterprises|engineering|creditunion|contractors|calvinklein|bridgestone|blockbuster|blackfriday|barclaycard|accountants|xn--y9a3aq|xn--wgbl6a|xn--wgbh1c|xn--unup4y|xn--pssy2u|xn--o3cw4h|xn--mxtq1m|xn--kput3i|xn--io0a7i|xn--fiqz9s|xn--fiqs8s|xn--fiq64b|xn--czru2d|xn--czrs0t|xn--cg4bki|xn--c2br7g|xn--9et52u|xn--9dbq2a|xn--90a3ac|xn--80aswg|xn--5tzm5g|xn--55qx5d|xn--4gbrim|xn--45q11c|xn--3pxu8k|xn--30rr7y|volkswagen|vlaanderen|vistaprint|university|telefonica|technology|tatamotors|swiftcover|schaeffler|restaurant|republican|realestate|prudential|protection|properties|onyourside|nextdirect|newholland|nationwide|mitsubishi|management|industries|immobilien|healthcare|foundation|extraspace|eurovision|cuisinella|creditcard|consulting|capitalone|boehringer|bnpparibas|basketball|associates|apartments|accountant|yodobashi|xn--vhquv|xn--tckwe|xn--p1acf|xn--nqv7f|xn--ngbrx|xn--l1acc|xn--j1amh|xn--j1aef|xn--fhbei|xn--e1a4c|xn--d1alf|xn--c1avg|xn--90ais|vacations|travelers|stockholm|statefarm|statebank|solutions|shangrila|scjohnson|richardli|pramerica|passagens|panasonic|microsoft|melbourne|marshalls|marketing|lifestyle|landrover|lancaster|ladbrokes|kuokgroup|insurance|institute|honeywell|homesense|homegoods|homedepot|hisamitsu|goodhands|goldpoint|furniture|fujixerox|frontdoor|fresenius|firestone|financial|fairwinds|equipment|education|directory|community|christmas|bloomberg|barcelona|aquarelle|analytics|amsterdam|allfinanz|alfaromeo|accenture|yokohama|xn--qxam|xn--p1ai|xn--node|xn--90ae|woodside|verisign|ventures|vanguard|uconnect|training|telecity|symantec|supplies|stcgroup|software|softbank|showtime|shopping|services|security|samsclub|saarland|reliance|redstone|property|plumbing|pictures|pharmacy|partners|observer|movistar|mortgage|merckmsd|memorial|mckinsey|maserati|marriott|lundbeck|lighting|jpmorgan|istanbul|ipiranga|infiniti|hospital|holdings|helsinki|hdfcbank|guardian|graphics|grainger|goodyear|frontier|football|firmdale|fidelity|feedback|exchange|everbank|etisalat|esurance|ericsson|engineer|download|discover|discount|diamonds|democrat|deloitte|delivery|computer|commbank|clothing|clinique|cleaning|cityeats|cipriani|chrysler|catholic|catering|capetown|business|builders|budapest|brussels|broadway|bradesco|boutique|baseball|bargains|barefoot|barclays|attorney|allstate|airforce|abudhabi|zuerich|youtube|yamaxun|xfinity|winners|windows|whoswho|wedding|website|weather|watches|wanggou|walmart|trading|toshiba|tiffany|tickets|theatre|theater|temasek|systems|surgery|support|storage|statoil|starhub|staples|spiegel|singles|shriram|shiksha|science|schwarz|schmidt|sandvik|samsung|rexroth|reviews|rentals|recipes|realtor|politie|pioneer|philips|panerai|origins|organic|oldnavy|okinawa|neustar|network|netflix|netbank|monster|metlife|markets|lincoln|limited|liaison|leclerc|latrobe|lasalle|lanxess|lancome|lacaixa|komatsu|kitchen|juniper|jewelry|ismaili|iselect|hyundai|hotmail|hoteles|hosting|holiday|hitachi|hangout|hamburg|guitars|grocery|godaddy|genting|gallery|fujitsu|frogans|forsale|flowers|florist|flights|fitness|fishing|finance|ferrero|ferrari|fashion|farmers|express|exposed|domains|digital|dentist|cruises|cricket|courses|coupons|country|corsica|cooking|contact|compare|company|comcast|cologne|college|clubmed|citadel|chintai|channel|cartier|careers|caravan|capital|bugatti|brother|booking|bestbuy|bentley|bauhaus|banamex|avianca|auspost|audible|auction|athleta|android|alibaba|agakhan|academy|abogado|zappos|yandex|yachts|xperia|xihuan|webcam|warman|walter|vuelos|voyage|voting|vision|virgin|villas|viking|viajes|unicom|travel|toyota|tkmaxx|tjmaxx|tienda|tennis|tattoo|target|taobao|taipei|sydney|swatch|suzuki|supply|studio|stream|social|soccer|shouji|select|secure|search|schule|school|sanofi|sakura|safety|ryukyu|rogers|rocher|review|report|repair|reisen|realty|racing|quebec|pictet|piaget|physio|photos|pfizer|otsuka|orange|oracle|online|olayan|office|nowruz|norton|nissay|nissan|natura|nagoya|mutual|museum|moscow|mormon|monash|mobily|mobile|mattel|market|makeup|maison|madrid|luxury|london|locker|living|lefrak|lawyer|latino|lancia|kosher|kindle|kinder|kaufen|juegos|joburg|jaguar|intuit|insure|imamat|hughes|hotels|hockey|hiphop|hermes|health|gratis|google|global|giving|george|garden|gallup|futbol|flickr|family|expert|events|estate|energy|emerck|durban|dupont|dunlop|doctor|direct|design|dental|degree|dealer|datsun|dating|cruise|credit|coupon|condos|comsec|coffee|clinic|claims|circle|church|chrome|chanel|center|casino|caseih|career|camera|broker|boston|bostik|blanco|bharti|berlin|beauty|bayern|author|aramco|anquan|alstom|alsace|alipay|airtel|airbus|agency|africa|active|abbvie|abbott|abarth|zippo|yahoo|xerox|world|works|weibo|weber|watch|wales|volvo|vodka|vista|video|vegas|ubank|tushu|tunes|trust|trade|tours|total|toray|tools|tokyo|today|tmall|tirol|tires|tatar|swiss|sucks|style|study|store|stada|space|solar|smile|smart|sling|skype|shoes|shell|sharp|seven|sener|salon|rugby|rodeo|rocks|ricoh|reise|rehab|radio|quest|promo|prime|press|praxi|poker|place|pizza|photo|phone|party|parts|paris|osaka|omega|nowtv|nokia|ninja|nikon|nexus|nadex|movie|mopar|money|miami|media|mango|macys|lupin|lotto|lotte|locus|loans|lixil|lipsy|linde|lilly|lexus|legal|lease|lamer|kyoto|koeln|jetzt|iveco|irish|intel|ikano|hyatt|house|horse|honda|homes|guide|gucci|group|gripe|green|gmail|globo|glass|glade|gives|gifts|games|gallo|forum|forex|final|fedex|faith|epson|epost|email|edeka|earth|dubai|drive|dodge|delta|deals|dance|dabur|cymru|crown|codes|coach|cloud|click|citic|cisco|cheap|chase|cards|canon|build|bosch|boots|boats|black|bingo|bible|beats|baidu|azure|autos|audio|archi|apple|amica|amfam|aetna|adult|actor|zone|zero|zara|yoga|xbox|work|wine|wiki|wien|weir|wang|voto|vote|vivo|viva|visa|vana|tube|toys|town|tips|tiaa|teva|tech|team|taxi|talk|surf|star|spot|sony|song|sohu|sncf|skin|site|sina|silk|show|shop|shia|shaw|sexy|seek|seat|scot|scor|saxo|save|sarl|sapo|sale|safe|ruhr|rsvp|room|rmit|rich|rest|rent|reit|read|raid|qpon|prof|prod|post|porn|pohl|plus|play|pink|ping|pics|pccw|pars|page|open|ollo|nike|nico|next|news|navy|name|moto|moda|mobi|mint|mini|menu|meme|meet|maif|luxe|ltda|love|loft|loan|live|link|limo|like|life|lidl|lgbt|lego|land|kred|kpmg|kiwi|kddi|jprs|jobs|jeep|java|itau|info|immo|imdb|ieee|icbc|hsbc|host|hgtv|here|help|hdfc|haus|hair|guru|guge|goog|golf|gold|gmbh|gift|ggee|gent|gbiz|game|fund|free|ford|food|flir|fish|fire|film|fido|fiat|fast|farm|fans|fail|fage|erni|dvag|duns|duck|doha|docs|dish|diet|desi|dell|deal|dclk|date|data|cyou|coop|cool|club|city|citi|chat|cern|cbre|cash|case|casa|cars|care|camp|call|cafe|buzz|book|bond|bofa|blue|blog|bing|bike|best|beer|bbva|bank|band|baby|auto|audi|asia|asda|arte|arpa|army|arab|amex|ally|akdn|aigo|aero|adac|able|aarp|zip|yun|you|xyz|xxx|xin|wtf|wtc|wow|wme|win|wed|vip|vin|vig|vet|ups|uol|uno|ubs|tvs|tui|trv|top|tjx|thd|tel|tdk|tci|tax|tab|stc|srt|srl|soy|sky|ski|sfr|sex|sew|ses|scb|sca|sbs|sbi|sas|sap|rwe|run|rip|rio|ril|ren|red|qvc|pwc|pub|pru|pro|pnc|pin|pid|phd|pet|pay|ovh|ott|org|ooo|onl|ong|one|off|obi|nyc|ntt|nrw|nra|now|nhk|ngo|nfl|new|net|nec|nba|nab|mtr|mtn|msd|mov|mom|moi|moe|mma|mls|mlb|mit|mil|meo|men|med|mba|map|man|ltd|lpl|lol|lds|law|lat|krd|kpn|kim|kia|kfh|joy|jot|jnj|jmp|jll|jlc|jio|jcp|jcb|iwc|itv|ist|int|ink|ing|ifm|icu|ice|ibm|how|hot|hkt|hiv|hbo|gov|got|gop|goo|gmx|gmo|gle|gea|gdn|gap|gal|fyi|fun|ftr|frl|fox|foo|fly|fit|fan|eus|esq|edu|eco|eat|dvr|dtv|dot|dog|dnp|diy|dhl|dev|dds|day|dad|csc|crs|com|cfd|cfa|ceo|ceb|cbs|cbn|cba|cat|car|cam|cal|cab|bzh|buy|box|bot|boo|bom|bnl|bmw|bms|biz|bio|bid|bet|bcn|bcg|bbt|bbc|bar|axa|aws|art|app|aol|anz|aig|afl|aeg|ads|aco|abc|abb|aaa|zw|zm|za|yt|ye|ws|wf|vu|vn|vi|vg|ve|vc|va|uz|uy|us|uk|ug|ua|tz|tw|tv|tt|tr|to|tn|tm|tl|tk|tj|th|tg|tf|td|tc|sz|sy|sx|sv|su|st|sr|so|sn|sm|sl|sk|sj|si|sh|sg|se|sd|sc|sb|sa|rw|ru|rs|ro|re|qa|py|pw|pt|ps|pr|pn|pm|pl|pk|ph|pg|pf|pe|pa|om|nz|nu|nr|np|no|nl|ni|ng|nf|ne|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|mn|mm|ml|mk|mh|mg|me|md|mc|ma|ly|lv|lu|lt|ls|lr|lk|li|lc|lb|la|kz|ky|kw|kr|kp|kn|km|ki|kh|kg|ke|jp|jo|jm|je|it|is|ir|iq|io|in|im|il|ie|id|hu|ht|hr|hn|hm|hk|gy|gw|gu|gt|gs|gr|gq|gp|gn|gm|gl|gi|gh|gg|gf|ge|gd|gb|ga|fr|fo|fm|fk|fj|fi|eu|et|es|er|eg|ee|ec|dz|do|dm|dk|dj|de|cz|cy|cx|cw|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|bz|by|bw|bv|bt|bs|br|bo|bn|bm|bj|bi|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ar|aq|ao|am|al|ai|ag|af|ae|ad|ac)"
        className="form-control"
      />
    </InputGroup>
  </div>
);

export const CompanyField = props => (
  <div>
    <InputGroup>
      <InputGroupAddon>
        <span className="input-group-text">
          <i className="icon-briefcase" />
        </span>
      </InputGroupAddon>
      <Input
        type="text"
        id="company"
        placeholder="Company"
        name="company"
        value={props.value}
        onChange={event => props.onChangeValue(event)}
      />
    </InputGroup>
  </div>
);

export const FirstNameField = props => (
  <div>
    <InputGroup>
      <InputGroupAddon>
        <span className="input-group-text">
          <i className="icon-user" />
        </span>
      </InputGroupAddon>
      <Input
        id="firstName"
        type="text"
        placeholder="First Name"
        name="firstName"
        value={props.value}
        onChange={event => props.onChangeValue(event)}
        required
      />
    </InputGroup>
  </div>
);

export const LastNameField = props => (
  <div>
    <InputGroup>
      <InputGroupAddon>
        <span className="input-group-text">
          <i className="icon-user" />
        </span>
      </InputGroupAddon>
      <Input
        id="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={props.value}
        onChange={event => props.onChangeValue(event)}
        required
      />
    </InputGroup>
  </div>
);

export const UsernameField = props => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon>
          <span className="input-group-text">
            <i className="icon-user" />
          </span>
        </InputGroupAddon>
        <Input
          type="text"
          id="username"
          className="form-control"
          placeholder="Username"
          name="username"
          value={props.value}
          onChange={event => props.onChangeValue(event)}
          minLength="6"
          maxLength="15"
          pattern="^[\w]+$"
          title={
            props.title || "Usernames must be 6-15 alphanumeric characters"
          }
          required
        />
      </InputGroup>
    </div>
  );
};

export const PasswordField = props => (
  <div>
    <InputGroup>
      <InputGroupAddon>
        <span className="input-group-text">
          <i className="icon-lock" />
        </span>
      </InputGroupAddon>
      <Input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        value={props.value}
        onChange={event => props.onChangeValue(event)}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$^+=!*()@%&]).{8,}"
        title={
          props.title ||
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        }
        minLength="8"
        required
      />
    </InputGroup>
  </div>
);

export const VerifiedPasswordField = props => (
  <div>
    <InputGroup>
      <InputGroupAddon>
        <span className="input-group-text">
          <i className="icon-lock" />
        </span>
      </InputGroupAddon>
      <Input
        type="password"
        placeholder="Repeat password"
        name="confirmPassword"
        value={props.value}
        onChange={event => props.onChangeValue(event)}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$^+=!*()@%&]).{8,}"
        title=""
        minLength="8"
        id="confirmPassword"
        required
      />
    </InputGroup>
  </div>
);

export const usernameRegex = "^[w]+$";

export const emailRegex =
  "[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+[.]+(xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|travelersinsurance|northwesternmutual|xn--xkc2dl3a5ee0h|xn--mgberp4a5d4ar|xn--mgbai9azgqp6j|xn--bck1b9a5dre4c|xn--5su34j936bgsg|xn--3oq18vl8pn36a|xn--xkc2al3hye2a|xn--mgba7c0bbn0a|xn--fzys8d69uvgm|xn--nqv7fs00ema|xn--mgbc0a9azcg|xn--mgbaakc7dvf|xn--mgba3a4f16a|xn--lgbbat1ad8j|xn--kcrx77d1x4a|xn--i1b6b1a6a2e|sandvikcoromant|kerryproperties|americanexpress|xn--rvc1e0am3e|xn--mgbx4cd0ab|xn--mgbi4ecexp|xn--mgbca7dzdo|xn--mgbbh1a71e|xn--mgbb9fbpob|xn--mgbayh7gpa|xn--mgbaam7a8h|xn--mgba3a3ejt|xn--jlq61u9w7b|xn--h2breg3eve|xn--fiq228c5hs|xn--b4w605ferd|xn--80aqecdr1a|xn--6qq986b3xl|xn--54b7fta0cc|weatherchannel|kerrylogistics|cookingchannel|cancerresearch|bananarepublic|americanfamily|afamilycompany|xn--ygbi2ammx|xn--yfro4i67o|xn--tiq49xqyj|xn--h2brj9c8c|xn--fzc2c9e2c|xn--fpcrj9c3d|xn--eckvdtc9d|wolterskluwer|travelchannel|spreadbetting|lifeinsurance|international|xn--qcka1pmc|xn--ogbpf8fl|xn--ngbe9e0a|xn--ngbc5azd|xn--mk1bu44c|xn--mgbt3dhd|xn--mgbpl2fh|xn--mgbgu82a|xn--mgbab2bd|xn--mgb9awbf|xn--gckr3f0f|xn--8y0a063a|xn--80asehdb|xn--80adxhks|xn--45br5cyl|xn--3e0b707e|versicherung|scholarships|lplfinancial|construction|xn--zfr164b|xn--xhq521b|xn--w4rs40l|xn--vuq861b|xn--t60b56a|xn--ses554g|xn--s9brj9c|xn--rovu88b|xn--rhqv96g|xn--q9jyb4c|xn--pgbs0dh|xn--pbt977c|xn--nyqy26a|xn--mix891f|xn--mgbtx2b|xn--mgbbh1a|xn--kpu716f|xn--kpry57d|xn--kprw13d|xn--jvr189m|xn--j6w193g|xn--imr513n|xn--hxt814e|xn--h2brj9c|xn--gk3at1e|xn--gecrj9c|xn--g2xx48c|xn--flw351e|xn--fjq720a|xn--fct429k|xn--estv75g|xn--efvy88h|xn--d1acj3b|xn--czr694b|xn--cck2b3b|xn--9krt00a|xn--80ao21a|xn--6frz82g|xn--55qw42g|xn--45brj9c|xn--42c2d9a|xn--3hcrj9c|xn--3ds443g|xn--3bst00m|xn--2scrj9c|xn--1qqw23a|xn--1ck2e1b|xn--11b4c3d|williamhill|rightathome|redumbrella|progressive|productions|playstation|photography|olayangroup|motorcycles|lamborghini|kerryhotels|investments|foodnetwork|enterprises|engineering|creditunion|contractors|calvinklein|bridgestone|blockbuster|blackfriday|barclaycard|accountants|xn--y9a3aq|xn--wgbl6a|xn--wgbh1c|xn--unup4y|xn--pssy2u|xn--o3cw4h|xn--mxtq1m|xn--kput3i|xn--io0a7i|xn--fiqz9s|xn--fiqs8s|xn--fiq64b|xn--czru2d|xn--czrs0t|xn--cg4bki|xn--c2br7g|xn--9et52u|xn--9dbq2a|xn--90a3ac|xn--80aswg|xn--5tzm5g|xn--55qx5d|xn--4gbrim|xn--45q11c|xn--3pxu8k|xn--30rr7y|volkswagen|vlaanderen|vistaprint|university|telefonica|technology|tatamotors|swiftcover|schaeffler|restaurant|republican|realestate|prudential|protection|properties|onyourside|nextdirect|newholland|nationwide|mitsubishi|management|industries|immobilien|healthcare|foundation|extraspace|eurovision|cuisinella|creditcard|consulting|capitalone|boehringer|bnpparibas|basketball|associates|apartments|accountant|yodobashi|xn--vhquv|xn--tckwe|xn--p1acf|xn--nqv7f|xn--ngbrx|xn--l1acc|xn--j1amh|xn--j1aef|xn--fhbei|xn--e1a4c|xn--d1alf|xn--c1avg|xn--90ais|vacations|travelers|stockholm|statefarm|statebank|solutions|shangrila|scjohnson|richardli|pramerica|passagens|panasonic|microsoft|melbourne|marshalls|marketing|lifestyle|landrover|lancaster|ladbrokes|kuokgroup|insurance|institute|honeywell|homesense|homegoods|homedepot|hisamitsu|goodhands|goldpoint|furniture|fujixerox|frontdoor|fresenius|firestone|financial|fairwinds|equipment|education|directory|community|christmas|bloomberg|barcelona|aquarelle|analytics|amsterdam|allfinanz|alfaromeo|accenture|yokohama|xn--qxam|xn--p1ai|xn--node|xn--90ae|woodside|verisign|ventures|vanguard|uconnect|training|telecity|symantec|supplies|stcgroup|software|softbank|showtime|shopping|services|security|samsclub|saarland|reliance|redstone|property|plumbing|pictures|pharmacy|partners|observer|movistar|mortgage|merckmsd|memorial|mckinsey|maserati|marriott|lundbeck|lighting|jpmorgan|istanbul|ipiranga|infiniti|hospital|holdings|helsinki|hdfcbank|guardian|graphics|grainger|goodyear|frontier|football|firmdale|fidelity|feedback|exchange|everbank|etisalat|esurance|ericsson|engineer|download|discover|discount|diamonds|democrat|deloitte|delivery|computer|commbank|clothing|clinique|cleaning|cityeats|cipriani|chrysler|catholic|catering|capetown|business|builders|budapest|brussels|broadway|bradesco|boutique|baseball|bargains|barefoot|barclays|attorney|allstate|airforce|abudhabi|zuerich|youtube|yamaxun|xfinity|winners|windows|whoswho|wedding|website|weather|watches|wanggou|walmart|trading|toshiba|tiffany|tickets|theatre|theater|temasek|systems|surgery|support|storage|statoil|starhub|staples|spiegel|singles|shriram|shiksha|science|schwarz|schmidt|sandvik|samsung|rexroth|reviews|rentals|recipes|realtor|politie|pioneer|philips|panerai|origins|organic|oldnavy|okinawa|neustar|network|netflix|netbank|monster|metlife|markets|lincoln|limited|liaison|leclerc|latrobe|lasalle|lanxess|lancome|lacaixa|komatsu|kitchen|juniper|jewelry|ismaili|iselect|hyundai|hotmail|hoteles|hosting|holiday|hitachi|hangout|hamburg|guitars|grocery|godaddy|genting|gallery|fujitsu|frogans|forsale|flowers|florist|flights|fitness|fishing|finance|ferrero|ferrari|fashion|farmers|express|exposed|domains|digital|dentist|cruises|cricket|courses|coupons|country|corsica|cooking|contact|compare|company|comcast|cologne|college|clubmed|citadel|chintai|channel|cartier|careers|caravan|capital|bugatti|brother|booking|bestbuy|bentley|bauhaus|banamex|avianca|auspost|audible|auction|athleta|android|alibaba|agakhan|academy|abogado|zappos|yandex|yachts|xperia|xihuan|webcam|warman|walter|vuelos|voyage|voting|vision|virgin|villas|viking|viajes|unicom|travel|toyota|tkmaxx|tjmaxx|tienda|tennis|tattoo|target|taobao|taipei|sydney|swatch|suzuki|supply|studio|stream|social|soccer|shouji|select|secure|search|schule|school|sanofi|sakura|safety|ryukyu|rogers|rocher|review|report|repair|reisen|realty|racing|quebec|pictet|piaget|physio|photos|pfizer|otsuka|orange|oracle|online|olayan|office|nowruz|norton|nissay|nissan|natura|nagoya|mutual|museum|moscow|mormon|monash|mobily|mobile|mattel|market|makeup|maison|madrid|luxury|london|locker|living|lefrak|lawyer|latino|lancia|kosher|kindle|kinder|kaufen|juegos|joburg|jaguar|intuit|insure|imamat|hughes|hotels|hockey|hiphop|hermes|health|gratis|google|global|giving|george|garden|gallup|futbol|flickr|family|expert|events|estate|energy|emerck|durban|dupont|dunlop|doctor|direct|design|dental|degree|dealer|datsun|dating|cruise|credit|coupon|condos|comsec|coffee|clinic|claims|circle|church|chrome|chanel|center|casino|caseih|career|camera|broker|boston|bostik|blanco|bharti|berlin|beauty|bayern|author|aramco|anquan|alstom|alsace|alipay|airtel|airbus|agency|africa|active|abbvie|abbott|abarth|zippo|yahoo|xerox|world|works|weibo|weber|watch|wales|volvo|vodka|vista|video|vegas|ubank|tushu|tunes|trust|trade|tours|total|toray|tools|tokyo|today|tmall|tirol|tires|tatar|swiss|sucks|style|study|store|stada|space|solar|smile|smart|sling|skype|shoes|shell|sharp|seven|sener|salon|rugby|rodeo|rocks|ricoh|reise|rehab|radio|quest|promo|prime|press|praxi|poker|place|pizza|photo|phone|party|parts|paris|osaka|omega|nowtv|nokia|ninja|nikon|nexus|nadex|movie|mopar|money|miami|media|mango|macys|lupin|lotto|lotte|locus|loans|lixil|lipsy|linde|lilly|lexus|legal|lease|lamer|kyoto|koeln|jetzt|iveco|irish|intel|ikano|hyatt|house|horse|honda|homes|guide|gucci|group|gripe|green|gmail|globo|glass|glade|gives|gifts|games|gallo|forum|forex|final|fedex|faith|epson|epost|email|edeka|earth|dubai|drive|dodge|delta|deals|dance|dabur|cymru|crown|codes|coach|cloud|click|citic|cisco|cheap|chase|cards|canon|build|bosch|boots|boats|black|bingo|bible|beats|baidu|azure|autos|audio|archi|apple|amica|amfam|aetna|adult|actor|zone|zero|zara|yoga|xbox|work|wine|wiki|wien|weir|wang|voto|vote|vivo|viva|visa|vana|tube|toys|town|tips|tiaa|teva|tech|team|taxi|talk|surf|star|spot|sony|song|sohu|sncf|skin|site|sina|silk|show|shop|shia|shaw|sexy|seek|seat|scot|scor|saxo|save|sarl|sapo|sale|safe|ruhr|rsvp|room|rmit|rich|rest|rent|reit|read|raid|qpon|prof|prod|post|porn|pohl|plus|play|pink|ping|pics|pccw|pars|page|open|ollo|nike|nico|next|news|navy|name|moto|moda|mobi|mint|mini|menu|meme|meet|maif|luxe|ltda|love|loft|loan|live|link|limo|like|life|lidl|lgbt|lego|land|kred|kpmg|kiwi|kddi|jprs|jobs|jeep|java|itau|info|immo|imdb|ieee|icbc|hsbc|host|hgtv|here|help|hdfc|haus|hair|guru|guge|goog|golf|gold|gmbh|gift|ggee|gent|gbiz|game|fund|free|ford|food|flir|fish|fire|film|fido|fiat|fast|farm|fans|fail|fage|erni|dvag|duns|duck|doha|docs|dish|diet|desi|dell|deal|dclk|date|data|cyou|coop|cool|club|city|citi|chat|cern|cbre|cash|case|casa|cars|care|camp|call|cafe|buzz|book|bond|bofa|blue|blog|bing|bike|best|beer|bbva|bank|band|baby|auto|audi|asia|asda|arte|arpa|army|arab|amex|ally|akdn|aigo|aero|adac|able|aarp|zip|yun|you|xyz|xxx|xin|wtf|wtc|wow|wme|win|wed|vip|vin|vig|vet|ups|uol|uno|ubs|tvs|tui|trv|top|tjx|thd|tel|tdk|tci|tax|tab|stc|srt|srl|soy|sky|ski|sfr|sex|sew|ses|scb|sca|sbs|sbi|sas|sap|rwe|run|rip|rio|ril|ren|red|qvc|pwc|pub|pru|pro|pnc|pin|pid|phd|pet|pay|ovh|ott|org|ooo|onl|ong|one|off|obi|nyc|ntt|nrw|nra|now|nhk|ngo|nfl|new|net|nec|nba|nab|mtr|mtn|msd|mov|mom|moi|moe|mma|mls|mlb|mit|mil|meo|men|med|mba|map|man|ltd|lpl|lol|lds|law|lat|krd|kpn|kim|kia|kfh|joy|jot|jnj|jmp|jll|jlc|jio|jcp|jcb|iwc|itv|ist|int|ink|ing|ifm|icu|ice|ibm|how|hot|hkt|hiv|hbo|gov|got|gop|goo|gmx|gmo|gle|gea|gdn|gap|gal|fyi|fun|ftr|frl|fox|foo|fly|fit|fan|eus|esq|edu|eco|eat|dvr|dtv|dot|dog|dnp|diy|dhl|dev|dds|day|dad|csc|crs|com|cfd|cfa|ceo|ceb|cbs|cbn|cba|cat|car|cam|cal|cab|bzh|buy|box|bot|boo|bom|bnl|bmw|bms|biz|bio|bid|bet|bcn|bcg|bbt|bbc|bar|axa|aws|art|app|aol|anz|aig|afl|aeg|ads|aco|abc|abb|aaa|zw|zm|za|yt|ye|ws|wf|vu|vn|vi|vg|ve|vc|va|uz|uy|us|uk|ug|ua|tz|tw|tv|tt|tr|to|tn|tm|tl|tk|tj|th|tg|tf|td|tc|sz|sy|sx|sv|su|st|sr|so|sn|sm|sl|sk|sj|si|sh|sg|se|sd|sc|sb|sa|rw|ru|rs|ro|re|qa|py|pw|pt|ps|pr|pn|pm|pl|pk|ph|pg|pf|pe|pa|om|nz|nu|nr|np|no|nl|ni|ng|nf|ne|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|mn|mm|ml|mk|mh|mg|me|md|mc|ma|ly|lv|lu|lt|ls|lr|lk|li|lc|lb|la|kz|ky|kw|kr|kp|kn|km|ki|kh|kg|ke|jp|jo|jm|je|it|is|ir|iq|io|in|im|il|ie|id|hu|ht|hr|hn|hm|hk|gy|gw|gu|gt|gs|gr|gq|gp|gn|gm|gl|gi|gh|gg|gf|ge|gd|gb|ga|fr|fo|fm|fk|fj|fi|eu|et|es|er|eg|ee|ec|dz|do|dm|dk|dj|de|cz|cy|cx|cw|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|bz|by|bw|bv|bt|bs|br|bo|bn|bm|bj|bi|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ar|aq|ao|am|al|ai|ag|af|ae|ad|ac)";
