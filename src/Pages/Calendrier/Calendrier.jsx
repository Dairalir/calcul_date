import { Gantt } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

export function Calendrier(props) {

    return (
        <Gantt tasks={props.modules.map( (module) => {

            const dateFin =new Date(module.debut)
            dateFin.setDate(dateFin.getDate() + module.duree);

            return {
                start: new Date(module.debut),
                end: dateFin,
                name: module.nom,
                id: module.id,
                type:'task',
                progress: 100,
                isDisabled: true,
                styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
            }}
        )
        } />
    )
}