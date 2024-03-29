import { Helmet } from 'react-helmet-async';
import ASSETS from '../../assets';
import * as appInfo from '../../../appInfo.json';

type IProps = {
  pageURL: string;
  pageTitle?: string;
  appDescription?: string;
  themeColor?: string;
  iconUrl?: string;
  iconAlt?: string;
};

export default function Heading({
  pageURL,
  pageTitle,
  appDescription,
  themeColor,
  iconUrl,
  iconAlt,
}: IProps) {
  return (
    <Helmet>
      {/* Basic Meta Info */}
      <title>{pageTitle}</title>
      {/* <link rel="canonical" href="" /> */}
      <meta name="description" content={appDescription} />
      <meta name="theme-color" content={themeColor} />

      {/* Schema.org Microdata */}
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={appDescription} />
      <meta itemProp="image" content={iconUrl} />

      {/* Facebook Open Graph Meta Info */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={appDescription} />
      <meta property="og:image" content={iconUrl} />

      {/* Twitter Meta Info */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={pageURL} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={appDescription} />
      <meta name="twitter:image" content={iconUrl} />
      <meta name="twitter:image:alt" content={iconAlt} />
    </Helmet>
  );
}

Heading.defaultProps = {
  pageTitle: appInfo.titleDefault,
  appDescription: appInfo.descriptionDefault,
  themeColor: appInfo.themeColor,
  iconUrl: ASSETS.app.logos.favIcon.src,
  iconAlt: ASSETS.app.logos.favIcon.alt,
};
