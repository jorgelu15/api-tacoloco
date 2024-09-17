export class Routes {
    protected route: string;
    private readonly _apiPrefix: string = "api";
    private readonly _apiVersion: string = "v1"

    constructor(route: string) {
        this.route = this.getApiPath(route);
    }

    protected getApiPath(route: string): string {
        if (route === undefined || route === null) {
            throw new Error("Route not provided");
        }

        const apiRoute = `/${this._apiPrefix}/${this._apiVersion}/${route}`;
        console.info(apiRoute);

        return apiRoute;
    }
}