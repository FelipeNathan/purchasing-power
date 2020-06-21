export type QuandlResponse = {
    dataset_data: DataSet
}

export type DataSet = {
    column_names: any[],
    data: any[]
}