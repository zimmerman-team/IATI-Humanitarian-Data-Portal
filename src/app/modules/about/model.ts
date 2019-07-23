type BasePageModel = {
  title: string;
};

interface AboutPageModel extends BasePageModel {
  intro?: string;
}

export const aboutPageConfig: AboutPageModel = {
  title: 'The Grand Bargain transparency commitment',
};
