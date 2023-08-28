import antdFaIR from 'antd/es/locale/fa_IR'; // Import Persian locale
import faIRMsg from '../locales/fa_IR.json'; // Import your translated messages

const FaIRLang = {
  antd: antdFaIR,
  locale: 'fa-IR',
  messages: {
    ...faIRMsg
  },
};

export default FaIRLang;
