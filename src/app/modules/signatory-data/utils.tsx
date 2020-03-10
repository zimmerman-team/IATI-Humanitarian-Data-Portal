/* eslint-disable no-nested-ternary */
/* core */
import React from 'react';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import IconCellModule from 'app/components/datadisplay/Table/common/IconCell';
/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';
import { getTooltipContent } from 'app/utils/generic';
import { getInfoTHead } from 'app/components/datadisplay/Table/helpers';
/* mock */
import { mockDataVar2 } from 'app/components/datadisplay/Table/mock';
/* models */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

const returnFlagValue = value => {
  switch (value) {
    case 'na':
      return 'NA';
    case '0':
      return 'False';
    case '1':
      return 'True';
    case false:
      return 'False';
    case true:
      return 'True';
    default:
      return 'NA';
  }
};

export const formatTableSignatories = (
  signatories,
  gbsignatoriesFromCMS,
  organisationNarrative
) => {
  const formatSigs: any = [];
  if (gbsignatoriesFromCMS && gbsignatoriesFromCMS.length > 0) {
    sortBy(gbsignatoriesFromCMS, 'name').forEach((cmsSig: any) => {
      const narrative = find(organisationNarrative, [
        'groupValue',
        cmsSig.IATIOrgRef,
      ]);
      const fSig = find(signatories, { val: cmsSig.IATIOrgRef.toLowerCase() });
      const orgType = get(cmsSig, 'orgType', '');
      let sigOrgName = get(
        narrative,
        'doclist.docs[0].reporting_org_narrative[0]',
        ''
      );

      sigOrgName = sigOrgName || cmsSig.pubName;

      formatSigs.push([
        //{name: get(fSig,'pubName',''), code: encodeURIComponent(sig.val)},
        {
          name: sigOrgName,
          code:
            fSig && fSig.count > 0 && fSig.pubHumData.count > 0
              ? encodeURIComponent(cmsSig.IATIOrgRef)
              : '',
        },
        get(cmsSig, 'name', ''),
        orgType,
        fSig && fSig.latest_iati_version ? fSig.latest_iati_version : 'blank',
        returnFlagValue(fSig ? fSig.pubHumData.count > 0 : '0'),
        returnFlagValue(
          fSig
            ? fSig.pubHumData.v202
              ? fSig.pubHumData.v202.count > 0
              : '0'
            : '0'
        ),
        returnFlagValue(
          fSig
            ? fSig.pubHumData.v203
              ? fSig.pubHumData.v203.count > 0
              : '0'
            : '0'
        ),
        orgType === 'Government'
          ? returnFlagValue(null)
          : returnFlagValue(fSig ? fSig.traec.count > 0 : '0'),
      ]);
    });
  }
  return formatSigs;
};

export const getBaseTable = (tooltipsData): TableModuleModel => {
  const tableConfig = mockDataVar2;
  tableConfig.columns = [
    {
      name: 'Publishing organisation',
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Publishing organisation',
            getTooltipContent(
              tooltipsData,
              'Signatory Data',
              'Publishing organisation'
            )
          ),
        customBodyRender: (value, tableMeta, updateValue) => {
          return value.code !== '' ? (
            <LinkCellModule
              link={`/signatory-data/${value.code}/${value.name}/overview`}
              value={value.name}
            />
          ) : (
            value.name
          );
        },
        customFilterListRender: value => `Publishing organisation: ${value}`,
      },
    },
    {
      name: 'GB signatory',
      options: {
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'GB signatory',
            getTooltipContent(tooltipsData, 'Signatory Data', 'GB Signatory')
          ),
        customFilterListRender: value => `GB signatory: ${value}`,
      },
    },
    {
      name: 'Organisation type',
      options: {
        filter: true,
        filterType: 'dropdown',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Organisation type',
            getTooltipContent(
              tooltipsData,
              'Signatory Data',
              'Organisation type'
            )
          ),
        customFilterListRender: value => `Organisation type: ${value}`,
      },
    },
    {
      name: 'Latest IATI version',
      options: {
        filter: true,
        filterType: 'checkbox',
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Latest IATI version',
            getTooltipContent(
              tooltipsData,
              'Signatory Data',
              'Latest IATI version'
            )
          ),
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              style={{ visibility: value === 'blank' ? 'hidden' : 'visible' }}
            >
              {value}
            </div>
          );
        },
        customFilterListRender: value => `Latest IATI version: ${value}`,
      },
    },
    {
      name: 'Publishing hum.data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Publishing hum.data?',
            getTooltipContent(
              tooltipsData,
              'Signatory Data',
              'Publishing hum.data?'
            )
          ),
        customFilterListRender: value => `Publishing hum.data?: ${value}`,
      },
    },
    {
      name: 'Publishing v2.02 hum. data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Publishing v2.02 hum. data?',
            getTooltipContent(
              tooltipsData,
              'Signatory Data',
              'Publishing v2.02 hum. data?'
            )
          ),
        customFilterListRender: value =>
          `Publishing v2.02 hum. data?: ${value}`,
      },
    },
    {
      name: 'Publishing v2.03 hum. data?',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Publishing v2.03 hum. data?',
            getTooltipContent(
              tooltipsData,
              'Signatory Data',
              'Publishing v2.03 hum. data?'
            )
          ),
        customFilterListRender: value =>
          `Publishing v2.03 hum. data?: ${value}`,
      },
    },
    {
      name: 'Incoming trans traceability',
      options: {
        filter: true,
        filterType: 'checkbox',
        filterOptions: { names: ['True', 'False', 'NA'] },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <IconCellModule value={value} />;
        },
        customHeadRender: (columnMeta, updateDirection) =>
          getInfoTHead(
            'Incoming trans traceability',
            getTooltipContent(
              tooltipsData,
              'Signatory Data',
              'Incoming trans traceability'
            )
          ),
        customFilterListRender: value =>
          `Incoming trans traceability: ${value}`,
      },
    },
  ];

  return tableConfig;
};
