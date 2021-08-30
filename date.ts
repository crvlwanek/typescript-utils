const getISODate = (dateOffset?: number): string => {
    let d = new Date();
    dateOffset && d.setDate(d.getDate() + dateOffset);
    return d.toISOString().split("T")[0];
}
