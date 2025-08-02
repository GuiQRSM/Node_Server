//process.stdin.pipe(process.stdout);
import { Readable } from 'stream';

class OneToHundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (i > 100) {
                this.push(null);
            } else {
                this.push(String(i));
            }
        }, 1000);

    }
}

new OneToHundredStream().pipe(process.stdout);