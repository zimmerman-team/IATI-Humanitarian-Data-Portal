export type CCTRIPageModel = {
  title: string;
  sections: SectionModel[];
};

interface SectionModel {
  title?: string;
  content: string | string[];
}
