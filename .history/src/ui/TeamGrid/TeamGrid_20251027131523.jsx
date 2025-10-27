import "./TeamGrid.css";

export default function TeamGrid() {
    const team = [
        { name: "Bruna", title: "UI/UX Designer", img: "/bruna.png" },
        { name: "Cesaria", title: "UI/UX Designer", img: "/team/cesaria.jpg" },
        { name: "Daniel", title: "UI/UX Designer", img: "/team/daniel.jpg" },
        { name: "Kunwar", title: "UI/UX Designer", img: "/team/kunwar.jpg" },
        { name: "Sophia", title: "UI/UX Designer", img: "/team/sophia.jpg" },
        { name: "Kyle", title: "Fullstack Developer", img: "/team/kyle.jpg" },
        {
            name: "Shabnam",
            title: "Fullstack Developer",
            img: "/team/shabnam.jpg",
        },
        { name: "Sooah", title: "Fullstack Developer", img: "/team/sooah.jpg" },
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
