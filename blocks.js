// Shared data for scan.html and search.html - the only file you edit per block.
// lat/lng: long-press the spot on Google Maps and copy the two numbers (e.g. lat: 13.1234, lng: 77.5678).
// model: path or direct .glb link of the block's Echo3D model (e.g. 'models/cv-raman.glb'). Leave '' for none.
// viewer: Echo3D share link; opens the block's 3D model in a new tab from the scan page.
// Blocks with lat/lng left as null are skipped in AR and have live route disabled.
const BLOCKS = [
  { id: 'cv-raman-block', no: 1, tag: 'BLOCK 01', name: "CV Raman Block", desc: "Houses ECE, EEE, REVA NEST, Fab Lab, Kuvempu Auditorium and Aryabhatta Seminar Hall.",
    lat: 13.1163119, lng: 77.6346704, model: '', viewer: 'https://go.echo3d.com/OOGf' },
  { id: 'sir-m-visvesvaraya-block', no: 2, tag: 'BLOCK 02', name: "Sir M Visvesvaraya Block", desc: "Civil, Mechanical, Computing & IT, and Architecture departments.",
    lat: 13.1156712, lng: 77.6345695, model: '', viewer: 'https://go.echo3d.com/teIi' },
  { id: 'swami-vivekananda-block', no: 3, tag: 'BLOCK 03', name: "Swami Vivekananda Block", desc: "Legal Studies, CSA, Commerce, Management, Arts & Humanities, Placement Cell, and the Rangasthala amphitheatre.",
    lat: 13.1146237, lng: 77.6348401, model: '', viewer: 'https://go.echo3d.com/SkNL' },
  { id: 'saugandhika', no: 4, tag: 'BLOCK 04', name: "Saugandhika", desc: "Garden stretch near SMV and SV Blocks.",
    lat: 13.1150597, lng: 77.6351948, model: '', viewer: 'https://go.echo3d.com/aVcE' },
  { id: 'library', no: 5, tag: 'BLOCK 05', name: "Library", desc: "Central library - reading floors, reference section, and the digital archive desk.",
    lat: 13.1147178, lng: 77.6352236, model: '', viewer: 'https://go.echo3d.com/R50e' },
  { id: 'playground', no: 6, tag: 'BLOCK 06', name: "Playground", desc: "Main ground for sports, assembly, and open-air events.",
    lat: 13.1165917, lng: 77.6361621, model: '', viewer: 'https://go.echo3d.com/Rssd' },
  { id: 'food-court-and-stationary', no: 7, tag: 'BLOCK 07', name: "Food Court & Stationary", desc: "Main food court with stationery shop attached.",
    lat: 13.1156474, lng: 77.636027, model: '', viewer: 'https://go.echo3d.com/K0tn' },
  { id: 'reva-health-centre', no: 8, tag: 'BLOCK 08', name: "REVA Health Centre", desc: "On-campus health centre for students.",
    lat: 13.1156474, lng: 77.636027, model: '', viewer: 'https://go.echo3d.com/rVpo' },
  { id: 'panchami-sagar', no: 9, tag: 'BLOCK 09', name: "Panchami Sagar", desc: "Panchami Sagar.",
    lat: 13.1148644, lng: 77.6360132, model: '', viewer: 'https://go.echo3d.com/W1Lr' },
  { id: 'admission-block', no: 10, tag: 'BLOCK 10', name: "Admission Block", desc: "Where admissions and student records are handled.",
    lat: 13.113888, lng: 77.635453, /* TEMPORARY: same as Business Block - re-pin */ model: '', viewer: 'https://go.echo3d.com/MDxG' },
  { id: 'reva-business-block', no: 11, tag: 'BLOCK 11', name: "REVA Business Block", desc: "REVA Business School and Chanakya Auditorium.",
    lat: 13.113888, lng: 77.635453, model: '', viewer: 'https://go.echo3d.com/OOvI' },
  { id: 'science-block', no: 12, tag: 'BLOCK 12', name: "Science Block", desc: "Applied Sciences, RISM, with APJ Abdul Kalam and Prof. Junjappa Seminar Halls.",
    lat: 13.1144383, lng: 77.6352575, model: '', viewer: 'https://go.echo3d.com/Esf2' },
  { id: 'yippee-point', no: 13, tag: 'BLOCK 13', name: "Yippee Point", desc: "Popular snack stop near the Science/PU Block area.",
    lat: 13.1144383, lng: 77.6352575, model: '', viewer: 'https://go.echo3d.com/sNqf' },
  { id: 'pu-block', no: 14, tag: 'BLOCK 14', name: "PU Block", desc: "REVA Independent PU College.",
    lat: 13.1138789, lng: 77.6348089, model: '', viewer: 'https://go.echo3d.com/L2NG' },
];
