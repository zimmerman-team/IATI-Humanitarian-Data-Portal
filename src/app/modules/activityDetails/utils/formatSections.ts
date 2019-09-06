/* interfaces/models */
import { ActMetadataModel } from '../store/interface';
import { SectionsModel } from '../model';

/* utils */
import find from 'lodash/find';

export function formatSections(
  actDetail: ActMetadataModel | null
): SectionsModel[] {
  const sections: SectionsModel[] = [
    {
      title: '',
      content: '',
    },
    {
      title: 'Results',
      content:
        'Support drought affected communities to access essential food support By improving the immediate food security of vulnerable households School feeding Support drought affected communities to access potable water ActionAid s activities will include water point s rehabilitation and maintenance de silting of pans as above provision of storage tanks and trucking Support women and girls protection in emergencies ActionAid will build capacity of women affected by the drought to develop community based protection plans Also to enhance protection spaces will be created to actively involve them in the design and implementation of women led local level protection responses provide psychosocial counselling to women affected by GBV and provide support and linkages to referral mechanisms and institutions including medical and legal support Safe spaces in schools through the girls forums and at food and water distribution points for women will be utilized Dignity kits to affected women and girls will be provided Strengthen accountability in the drought response AA realize the important role that participation and inclusion information sharing complaints and resolution mechanism and holding others to account plays in promoting accountability in delivery of emergency response.',
    },
  ];

  if (actDetail) {
    // here we will get the english description
    let engDesc: any = find(actDetail.description, descItem => {
      return descItem.indexOf('"lang":"en"') !== -1;
    });

    engDesc = engDesc || actDetail.description[0];
    engDesc = JSON.parse(engDesc);
    engDesc = engDesc.narrative ? engDesc.narrative[0].narrative : 'No Data';

    sections[0] = {
      title: 'Description',
      content: engDesc,
    };
  }

  return sections;
}
