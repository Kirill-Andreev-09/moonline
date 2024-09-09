import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import templateImg from 'app/public/img/template.jpg';
import { useStores } from 'app/store/use-stores';

export const MyBoxPage = observer(() => {
  const { InfoFormStore } = useStores();

  console.log('InfoFormStore.data', toJS(InfoFormStore.data));

  const pred = process.env.DOCUMENTS_API_URL;

  return (
    <div>
      {[1, 3, 4].map((item) => {
        return <div>{item}</div>;
      })}
      ;
    </div>
  );
});
