export type AboutPageModel = {
  title: string;
  sections: SectionModel[];
};

interface SectionModel {
  content: string;
}
