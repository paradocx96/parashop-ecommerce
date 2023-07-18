import {PDFDocument, rgb, StandardFonts} from 'pdf-lib'


const generatePDFInvoice = async (order, data) => {
    // Create PDF Document
    const pdfDoc = await PDFDocument.create()

    // Page Configuration
    const page = pdfDoc.addPage()
    const {width, height} = page.getSize()
    const fontSize = 30

    // Fonts Configuration
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Title
    page.drawText('Order Invoice', {
        x: 50,
        y: height - 50,
        size: fontSize + 5,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    // Order details
    page.drawText(`Order ID: ${order.id}`, {
        x: 50,
        y: height - 85,
        size: fontSize - 15,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    });

    // Customer details
    page.drawText(`Customer: ${order.customer.name}`, {
        x: 50,
        y: height - 110,
        size: fontSize - 15,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    });

    // const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
    // const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
    // const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
    // const jpgDims = jpgImage.scale(0.2)

    // const imageCell = (page, image, x, y, imageWidth, imageHeight) => {
    //     page.drawImage(image, {
    //         x: x + table.cellPadding,
    //         y: y - table.rowHeight + table.cellPadding,
    //         width: imageWidth,
    //         height: imageHeight,
    //     })
    // }

    // Order details
    page.drawText('Order Items', {
        x: 50,
        y: height - 150,
        size: fontSize - 15,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    });

    // Table Configurations
    const table = {
        startX: 50,
        startY: height - 155,
        rowHeight: 30,
        colWidths: [70, 250, 70, 60, 70],
        cellPadding: 5,
    };

    const drawTableCell = (page, x, y, text, font, bold = false) => {
        page.drawText(text, {
            x: x + table.cellPadding,
            y: y - table.rowHeight + table.cellPadding,
            font: font,
            size: 12,
            color: rgb(0, 0, 0),
        });
    };

    const textShortGenerate = (string, length) => {
        return (string.length > length)
            ? `${string.substring(0, length)}...`
            : string
    }

    // Draw table headers
    drawTableCell(page, table.startX, table.startY, 'Product ID', helveticaFont, true);
    drawTableCell(page, table.startX + table.colWidths[0], table.startY, 'Product Name', helveticaFont, true);
    drawTableCell(page, table.startX + table.colWidths[0] + table.colWidths[1], table.startY, 'Item Price', helveticaFont, true);
    drawTableCell(page, table.startX + table.colWidths[0] + table.colWidths[1] + table.colWidths[2], table.startY, 'Quantity', helveticaFont, true);
    drawTableCell(page, table.startX + table.colWidths[0] + table.colWidths[1] + table.colWidths[2] + table.colWidths[3], table.startY, 'Total Price', helveticaFont, true);

    // Draw table rows for order items
    let currentY = table.startY - table.rowHeight;

    // Draw table rows for order items
    for (const item of data) {
        drawTableCell(page, table.startX, currentY, item.id.toString(), helveticaFont);
        drawTableCell(page, table.startX + table.colWidths[0], currentY, textShortGenerate(item.title, 35), helveticaFont);
        drawTableCell(page, table.startX + table.colWidths[0] + table.colWidths[1], currentY, item.price.toString(), helveticaFont);
        drawTableCell(page, table.startX + table.colWidths[0] + table.colWidths[1] + table.colWidths[2], currentY, item.quantity.toString(), helveticaFont);
        drawTableCell(page, table.startX + table.colWidths[0] + table.colWidths[1] + table.colWidths[2] + table.colWidths[3], currentY, (item.price * item.quantity).toString(), helveticaFont);
        currentY -= table.rowHeight;
    }


    // Save PDF
    const pdfBytes = await pdfDoc.save()

    // PDF downloadable configuration
    const blob = new Blob([pdfBytes], {type: 'application/pdf'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    // File name configuration
    const currentDateTime = new Date().toJSON().slice(0, 19);
    const fileName = `Report_${order.customer.name}_${currentDateTime}.pdf`;
    const fileNameModified = fileName.replace(/ /g, "_").replace(/-/g, "_");

    // Download PDF
    link.href = url;
    link.download = fileNameModified;
    link.click();
}

export default generatePDFInvoice;
