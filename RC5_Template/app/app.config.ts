import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    campaignEndpoint: string;
    selectorEndpoint: string;
    assetEndpoint: string;
}

export const AppConfig: IAppConfig = {
    campaignEndpoint: "http://localhost:8084/campaigns",
    selectorEndpoint: "http://localhost:8084/selectors/",
    assetEndpoint: "http://localhost:8084/assets/"
};