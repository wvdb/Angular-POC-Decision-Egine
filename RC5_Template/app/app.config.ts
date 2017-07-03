import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    campaignDryRunEndpoint: string;
    selectorEndpoint: string;
    campaignEndpoint: string;
    assetEndpoint: string;
    impressionReportEndpoint: string;
}

export const AppConfig = {
    // campaignEndpoint: "http://localhost:8084/campaigns",
    // selectorEndpoint: "http://localhost:8084/selectors/",
    // assetEndpoint: "http://localhost:8084/assets/"
    campaignDryRunEndpoint: "http://localhost:8084/ads/dryRunPlacement?campaignName=",
    campaignEndpoint: "http://localhost:8080/campaigns",
    selectorEndpoint:  "http://localhost:8080/selectors/",
    assetEndpoint: "http://localhost:8080/assets/",
    impressionReportEndpoint: "http://localhost:8081/impressions/customer/"
};
