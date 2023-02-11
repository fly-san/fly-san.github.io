const data = await fetch("/data/mensa_list.json").then((response) => response.json());

function get_mensa_data(mensa_name){
    var mensa_id = data[mensa_name]['graphite']
    console.log(mensa_id)
}