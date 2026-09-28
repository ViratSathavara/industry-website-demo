const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'mock-data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const imageMap = {
  'prod-eng-001': '/images/components/flange-asme.svg',
  'prod-cnc-002': '/images/components/impeller-5axis.svg',
  'prod-cnc-003': '/images/components/spline-shaft.svg',
  'prod-cnc-004': '/images/components/manifold-block.svg',
  'prod-eng-002': '/images/components/machine-base.svg',
  'prod-cnc-006': '/images/components/wing-rib.svg',
  'prod-cnc-007': '/images/components/worm-gear.svg',
  'prod-cnc-008': '/images/components/valve-body.svg',
  'prod-cnc-009': '/images/components/robot-hub.svg',
  'prod-cnc-010': '/images/components/trunnion-housing.svg',
  'prod-cnc-011': '/images/components/pivot-pin.svg',
  'prod-cnc-012': '/images/components/tombstone-fixture.svg',
};

for (const [id, imgPath] of Object.entries(imageMap)) {
  // Find product block and replace images: [...]
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?images:\\s*\\[)[\\s\\S]*?(\\])`, 'm');
  content = content.replace(regex, `$1\n      "${imgPath}"\n    $2`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated product images in lib/mock-data/products.ts!');
