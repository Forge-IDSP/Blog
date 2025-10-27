import "./TeamGrid.css";

export default function TeamGrid() {
    const team = [
        { name: "Bruna", title: "UI/UX Designer", img: "/bruna.png" },
        { name: "Cesaria", title: "UI/UX Designer", img: "cesaria.png" },
        { name: "Daniel", title: "UI/UX Designer", img: "daniel.png" },
        { name: "Kunwar", title: "UI/UX Designer", img: "kunwar.png" },
        { name: "Sophia", title: "UI/UX Designer", img: "sophia.png" },
        { name: "Kyle", title: "Fullstack Developer", img: "kyle.png" },
        {
            name: "Shabnam",
            title: "Fullstack Developer",
            img: "/shabnam.png",
        },
        { name: "Sooah", title: "Fullstack Developer", img: "/sooah.png" },
    ];

    return (
        <div className='team-container'>
            <div className='team-grid'>
                {team.map((member) => (
                    <div
                        className='team-card'
                        key={member.name}>
                        <img
                            src={member.img}
                            alt={member.name}
                            className='team-img'
                        />
                        <h3 className='team-name'>{member.name}</h3>
                        <p className='team-title'>{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
