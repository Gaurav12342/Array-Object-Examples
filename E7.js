/**
 * 1) Add mobile number in below object 
 * 2) change name 'shiva' to 'mahadev'
 * 3) add mobile numebr in data object 
 * 4) delete age from below object
 * 5) console.log 'addres' object 
 * 6) delete zip code
 * 7) change city 'surat' to 'mumbai'
 * 8) add country as India in address
 * 9) cosnole hobby 
 * 10) add two more hobby in below object
 * 11) list out all keys value of data as array  
 */

const modificationObject = (mobileNo, city, country, name) => {
    let data = {
        name: 'shiva',
        age: 28,
        address: {
            city: 'surat',
            state: 'Gujarat',
            zip: '395004'
        },
        hobby: ['cricket', 'music']
    }

    let result = {
        ...data,
        // mobile_no: mobileNo,
        name: name,
        // address: { city: 'mumbai' }
    }
    delete result.age;
    delete result.address.zip;
    result['mobile_no'] = mobileNo;
    result['address']['city'] = city;
    result['address']['country'] = country;
    result.hobby.push('singing', 'dancing', 'eating')

    let arrayValueData = [];
    arrayValueData.push(result);

    console.log("Data =>", result);
    console.log("Hobby =>", result.hobby.join(', '));
    console.log("arrayValueData =>", arrayValueData);
}

modificationObject('9904449443', 'mumbai', 'India', 'mahadev');