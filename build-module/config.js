const
  headerUrl = "https://github.com/brown339/header",
  footerUrl = "https://github.com/brown339/footer",
  ;


export default {
  "us": {
    "header": {
      add: `${headerUrl} public/header`,
      branch: 'master'
    },
    "footer": {
      add: `${footerUrl} public/footer`,
      branch: 'master'
    }
  },
  "uk": {
    "header": {
      add: `${headerUrl} public/header`,
      branch: 'uk'
    },
    "footer": {
      add: `${footerUrl} public/footer`,
      branch: 'master'
    }
  },
};