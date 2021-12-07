export const writeFile = (fileName: string, value: string) => {
    const link = document.createElement("a");
    link.href = "data:text/plain;content-disposition=attachment;filename=file," + value;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};