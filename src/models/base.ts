export interface IModelBase {
    id: string | number;
    tenantId?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IAddress {
    province: string;
    ward: string;
    district: string;
    specificAddress: string;

}