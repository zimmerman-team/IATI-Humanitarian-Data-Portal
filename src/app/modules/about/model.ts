import { AboutTextBlock } from './store/interface';

export type AboutPageModel = {
  title: string;
  sections: SectionModel[];
  cmsTextBlocks: AboutTextBlock[];
};

interface SectionModel {
  title: string;
  content: string | string[];
}
