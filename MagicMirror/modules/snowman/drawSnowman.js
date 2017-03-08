function sketchProc(processing) {
    var canvasSize = 200;
    processing.size(canvasSize, canvasSize);
    processing.background(102, 205, 209);

    processing.fill(95, 235, 82);
    processing.rect(0, 300, canvasSize, 100);

    // Sun
    processing.fill(230, 237, 26);
    processing.ellipse(50, 50, 80, 80);

    // Snowman
    processing.fill(242, 242, 239);
    processing.ellipse(200, 120, 75, 75);
    processing.ellipse(200, 200, 100, 100);
    processing.ellipse(200, 300, 150, 150);

    // Arms
    processing.line(150, 200, 100, 100);
    processing.line(250, 200, 300, 100);
}