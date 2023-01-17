const team = [];

const memberOne = {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
};

console.log('memberOne', memberOne);

team.push(memberOne);

team.push({
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg',
});

team.push({
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg',
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg',
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg',
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg',
});

console.log('team', team);

for(let i =  0; i < team.length; i++){

    console.log(i, team[i]);

    for(let key in team[i]) {
        console.log('DOT NOTATION');
        console.log(key + ':', team[i].key);
        console.log('SQUARE NOTATION');
        console.log(key + ':', team[i][key]);
    }

}

const teamList = document.querySelector('.team');
for(let i=0; team.length; i++){
    const newListItem = document.createElement('li');
    newListItem.innerHTML = team[i].name + ' - ' + team[i].role + ' - ' + team[i].photo;
    teamList.append(newListItem);
}