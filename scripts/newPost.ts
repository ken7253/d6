import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';

const config = {
  postDir: ['content', 'post'],
  fileName: (date: string) => `${date}-post`,
  dateFormat: 'YYYY-MM-DD',
};

const now = dayjs().format(config.dateFormat);

const data = `
---
title:
description: none
date: ${now}
category: ''
draft: true
---
`;

fs.writeFile(path.join(...config.postDir, config.fileName(now)), data, () => {
  console.log('test');
});
