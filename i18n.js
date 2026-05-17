/* ════════════════════════════════════════
   i18n.js — Translations & language switcher
════════════════════════════════════════ */

const I18N = {
  it: {
    'nav.about': 'Chi sono',
    'nav.whatido': 'Cosa so fare',
    'nav.experience': 'Esperienze',
    'nav.education': 'Formazione',
    'nav.skills': 'Competenze',
    'nav.certifications': 'Certificazioni',
    'nav.contact': 'Contatti',
    'nav.cv': 'Scarica CV',

    'hero.label': 'SAP Consultant & Developer',
    'hero.tagline': 'Costruisco applicazioni enterprise su <span class="accent">SAP BTP</span>, tra cloud, dati e interfacce Fiori.',
    'hero.stack': 'Stack principale',
    'hero.stat1': 'Anno di esperienza',
    'hero.stat2': 'Full-stack SAP BTP',
    'hero.stat3': 'Formazione certificata',
    'hero.scroll': 'Scorri',

    'about.tag': '01 — Chi sono',
    'about.title': 'Un developer con la testa nel cloud SAP.',
    'about.p1': 'Sono un <strong>SAP Consultant</strong> con esperienza nello sviluppo end-to-end di applicazioni enterprise su <strong>SAP BTP</strong> tramite il modello <strong>CAP (Cloud Application Programming Model)</strong>. Progetto e sviluppo interfacce con <strong>SAPUI5</strong> e SAP Fiori, modello dati in <strong>SAP HANA</strong> con CDS e SQLScript, e integro servizi REST tramite OData v4.',
    'about.p2': 'In parallelo seguo la <strong>laurea triennale in Ingegneria Informatica</strong> presso UniNettuno, in modalità part-time per lavoratori. Punto a consolidare le mie competenze full-stack in ambito SAP e a crescere verso ruoli di <strong>architettura cloud</strong>.',

    'whatido.tag': '02 — Cosa so fare',
    'whatido.title': 'Le mie aree di competenza.',
    'whatido.c1.title': 'SAP Backend',
    'whatido.c1.desc': 'Costruisco servizi OData v4 con SAP CAP, gestisco la logica applicativa con handler Node.js e integro REST API su piattaforma BTP.',
    'whatido.c2.title': 'UI Development',
    'whatido.c2.desc': 'Sviluppo interfacce Fiori con SAPUI5, gestisco binding dati, navigazione e layout seguendo le SAP Fiori Design Guidelines.',
    'whatido.c3.title': 'Database & Query',
    'whatido.c3.desc': 'Modello dati con CDS, scrivo procedure SQLScript su SAP HANA e ottimizzo query per performance su column store.',
    'whatido.c4.title': 'Cloud & Integration',
    'whatido.c4.desc': 'Configuro destinazioni, gestisco build e deploy via mta.yaml su SAP BTP e integro servizi esterni tramite OData e REST API.',

    'exp.tag': '03 — Esperienze',
    'exp.title': 'Da dove vengo, dove sono.',
    'exp.badge': 'In corso',
    'exp.idgfab.period': 'NOV 2024<br/>PRESENTE',
    'exp.idgfab.role': 'SAP Consultant',
    'exp.idgfab.intro': 'Sviluppo end-to-end di applicazioni enterprise su SAP BTP per clienti di vari settori (banking, retail, manifatturiero). Dalla modellazione dati alla UI Fiori, copro tutti i layer dello stack.',
    'exp.idgfab.b1': 'Progettazione e sviluppo di applicazioni full-stack su <strong>SAP BTP</strong> con architettura CAP, copertura completa di modello dati, business logic, esposizione servizi e UI.',
    'exp.idgfab.b2': 'Implementazione di <strong>workflow approvativi complessi</strong> e gestione di processi enterprise: ordini, anagrafiche, reportistica multi-livello.',
    'exp.idgfab.b3': 'Modellazione dati con <strong>CDS Views</strong> e sviluppo di procedure <strong>SQLScript</strong> ottimizzate su SAP HANA Cloud.',
    'exp.idgfab.b4': 'Sviluppo di <strong>UI SAPUI5/Fiori</strong> responsive integrate con servizi OData v4 esposti dal backend CAP.',
    'exp.idgfab.b5': 'Realizzazione di <strong>integrazioni</strong> con sistemi interni ed esterni tramite OData e REST API.',
    'exp.idgfab.b6': 'Build e deploy su BTP tramite <strong>mta.yaml</strong>, uso di Git per versioning e Jira per tracciamento attività.',
    'exp.other': 'Altre esperienze',
    'exp.anim.role': 'Animatore Turistico',
    'exp.anim.org': 'Hotel — Trentino · Estate 2024',
    'exp.anim.desc': 'Esperienza estiva intensiva: gestione autonoma di gruppi e attività di intrattenimento, comunicazione diretta con il cliente, problem solving sotto stress. Una palestra reale per le soft skill che oggi porto nel lavoro tecnico — autonomia, responsabilità e capacità di stare in mezzo alle persone.',

    'edu.tag': '04 — Formazione',
    'edu.title': 'Costruire le fondamenta.',
    'edu.status': 'In corso · Part-time',
    'edu.uni.degree': 'Ingegneria Informatica',
    'edu.uni.type': 'Laurea Triennale',
    'edu.uni.period': 'Set 2024 → in corso',
    'edu.hs.degree': 'Maturità',
    'edu.hs.type': 'Amministrazione, Finanza e Marketing',
    'edu.hs.period': 'Diploma conseguito',
    'edu.hs.extra': 'Tirocinio scolastico in ambito tecnico-economico presso ente pubblico.',

    'skills.tag': '05 — Competenze tecniche',
    'skills.title': 'Il mio arsenale tecnico.',
    'skills.legend.core': 'Core — uso quotidiano',
    'skills.legend.working': 'Working — uso regolare',
    'skills.legend.basic': 'Basic — fondamenti',
    'skills.sap': 'SAP Ecosystem',
    'skills.badge.core': 'Core',
    'skills.backend': 'Backend & Dati',
    'skills.frontend': 'Frontend',
    'skills.other': 'Altri linguaggi',
    'skills.tools': 'Strumenti',
    'skills.lang': 'Lingue',
    'skills.async': 'Async Programming',
    'lang.it': 'Italiano',
    'lang.en': 'Inglese',
    'lang.es': 'Spagnolo',
    'lang.native': 'Madrelingua',

    'cert.tag': '06 — Certificazioni',
    'cert.title': 'Formazione extra.',
    'cert.meta': 'Attestato di formazione professionale · 240 ore',
    'cert.desc': 'Percorso intensivo sullo sviluppo applicazioni in Java: sintassi, OOP, gestione eccezioni e fondamenti di programmazione strutturata.',

    'cta.tag': 'Parliamoci',
    'cta.title': 'Hai un progetto SAP<br/>o vuoi solo dirmi ciao?',
    'cta.sub': 'Sono aperto a nuove opportunità, collaborazioni o semplicemente una chiacchierata tecnica.',

    'footer.legal': 'Autorizzo il trattamento dei dati personali ai sensi del D.Lgs. 196/2003 e del Reg. UE 2016/679 (GDPR).',
  },

  en: {
    'nav.about': 'About',
    'nav.whatido': 'What I do',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',

    'hero.label': 'SAP Consultant & Developer',
    'hero.tagline': 'I build enterprise applications on <span class="accent">SAP BTP</span> — cloud, data and Fiori interfaces.',
    'hero.stack': 'Core stack',
    'hero.stat1': 'Year of experience',
    'hero.stat2': 'Full-stack SAP BTP',
    'hero.stat3': 'Certified training',
    'hero.scroll': 'Scroll',

    'about.tag': '01 — About me',
    'about.title': 'A developer with his head in the SAP cloud.',
    'about.p1': 'I\'m an <strong>SAP Consultant</strong> with experience in end-to-end development of enterprise applications on <strong>SAP BTP</strong> using the <strong>CAP (Cloud Application Programming Model)</strong> framework. I design and build interfaces with <strong>SAPUI5</strong> and SAP Fiori, model data in <strong>SAP HANA</strong> with CDS and SQLScript, and integrate REST services through OData v4.',
    'about.p2': 'In parallel I\'m pursuing a <strong>Bachelor\'s degree in Computer Engineering</strong> at UniNettuno, on a part-time track for working students. I aim to consolidate my full-stack SAP skills and grow toward <strong>cloud architecture</strong> roles.',

    'whatido.tag': '02 — What I do',
    'whatido.title': 'My areas of expertise.',
    'whatido.c1.title': 'SAP Backend',
    'whatido.c1.desc': 'I build OData v4 services with SAP CAP, handle business logic with Node.js handlers and integrate REST APIs on the BTP platform.',
    'whatido.c2.title': 'UI Development',
    'whatido.c2.desc': 'I develop Fiori interfaces with SAPUI5, managing data binding, navigation and layout following SAP Fiori Design Guidelines.',
    'whatido.c3.title': 'Database & Query',
    'whatido.c3.desc': 'I model data with CDS, write SQLScript procedures on SAP HANA and optimize queries for column store performance.',
    'whatido.c4.title': 'Cloud & Integration',
    'whatido.c4.desc': 'I configure destinations, manage build and deploy via mta.yaml on SAP BTP, and integrate external services through OData and REST APIs.',

    'exp.tag': '03 — Experience',
    'exp.title': 'Where I come from, where I am.',
    'exp.badge': 'Current',
    'exp.idgfab.period': 'NOV 2024<br/>PRESENT',
    'exp.idgfab.role': 'SAP Consultant',
    'exp.idgfab.intro': 'End-to-end development of enterprise applications on SAP BTP for clients across multiple industries (banking, retail, manufacturing). I cover every layer of the stack, from data modelling to Fiori UI.',
    'exp.idgfab.b1': 'Design and development of full-stack applications on <strong>SAP BTP</strong> with CAP architecture, covering data model, business logic, service exposure and UI.',
    'exp.idgfab.b2': 'Implementation of <strong>complex approval workflows</strong> and management of enterprise processes: orders, master data, multi-level reporting.',
    'exp.idgfab.b3': 'Data modelling with <strong>CDS Views</strong> and development of optimized <strong>SQLScript</strong> procedures on SAP HANA Cloud.',
    'exp.idgfab.b4': 'Development of responsive <strong>SAPUI5/Fiori UIs</strong> integrated with OData v4 services exposed by the CAP backend.',
    'exp.idgfab.b5': 'Implementation of <strong>integrations</strong> with internal and external systems via OData and REST APIs.',
    'exp.idgfab.b6': 'Build and deployment on BTP via <strong>mta.yaml</strong>, Git for versioning and Jira for activity tracking.',
    'exp.other': 'Other experience',
    'exp.anim.role': 'Tourist Entertainer',
    'exp.anim.org': 'Hotel — Trentino, Italy · Summer 2024',
    'exp.anim.desc': 'Intensive summer experience: autonomous management of groups and entertainment activities, direct customer communication, problem solving under pressure. A real-world training ground for the soft skills I bring into technical work today — autonomy, responsibility and people skills.',

    'edu.tag': '04 — Education',
    'edu.title': 'Building the foundations.',
    'edu.status': 'Ongoing · Part-time',
    'edu.uni.degree': 'Computer Engineering',
    'edu.uni.type': 'Bachelor\'s Degree',
    'edu.uni.period': 'Sep 2024 → ongoing',
    'edu.hs.degree': 'High School Diploma',
    'edu.hs.type': 'Administration, Finance and Marketing',
    'edu.hs.period': 'Diploma obtained',
    'edu.hs.extra': 'School internship in technical-economic field at a public institution.',

    'skills.tag': '05 — Technical skills',
    'skills.title': 'My technical toolkit.',
    'skills.legend.core': 'Core — daily use',
    'skills.legend.working': 'Working — regular use',
    'skills.legend.basic': 'Basic — fundamentals',
    'skills.sap': 'SAP Ecosystem',
    'skills.badge.core': 'Core',
    'skills.backend': 'Backend & Data',
    'skills.frontend': 'Frontend',
    'skills.other': 'Other languages',
    'skills.tools': 'Tools',
    'skills.lang': 'Languages',
    'skills.async': 'Async Programming',
    'lang.it': 'Italian',
    'lang.en': 'English',
    'lang.es': 'Spanish',
    'lang.native': 'Native',

    'cert.tag': '06 — Certifications',
    'cert.title': 'Extra training.',
    'cert.meta': 'Professional training certificate · 240 hours',
    'cert.desc': 'Intensive course on Java application development: syntax, OOP, exception handling and fundamentals of structured programming.',

    'cta.tag': 'Let\'s talk',
    'cta.title': 'Got an SAP project<br/>or just want to say hi?',
    'cta.sub': 'I\'m open to new opportunities, collaborations or simply a technical conversation.',

    'footer.legal': 'I authorize the processing of personal data pursuant to Italian Legislative Decree 196/2003 and EU Reg. 2016/679 (GDPR).',
  },
};

const HERO_NAMES = {
  it: ['Luca', 'Ritrovato'],
  en: ['Luca', 'Ritrovato'],
};

/**
 * Apply a language to the whole document.
 * Updates [data-i18n] (textContent) and [data-i18n-html] (innerHTML) elements,
 * the <html lang> attribute, and the toggle button states.
 */
function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.it;

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
}

// Expose for script.js
window.I18N = I18N;
window.HERO_NAMES = HERO_NAMES;
window.applyLanguage = applyLanguage;