//process.stdin.pipe(process.stdout);
import { Readable, Writable, Transform } from 'stream';

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buff = Buffer.from(String(i));

        this.push(buff);
      }
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString()) * -1;

    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunck, encoding, callback) {
    console.log(Number(chunck.toString()) * 10);
    callback();
  }
}

new OneToHundredStream().pipe(new InverseNumberStream()).pipe(new MultiplyByTenStream());
