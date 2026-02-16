export class VolumeFormatStatus {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export class VolumeFormat {
  constructor(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}

export class VolumeData {
  constructor(id, created, format, bitrate, tracks, formatList, optionalField) {
    this.id = id;
    this.created = created;
    this.format = format;
    this.bitrate = bitrate;
    this.tracks = tracks;
    this.formatList = formatList;
    this.optionalField = optionalField; // może być null
  }
}

export default VolumeData;
