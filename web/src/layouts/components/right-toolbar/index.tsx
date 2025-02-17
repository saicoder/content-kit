import { Space } from 'antd';
import User from '../user';

import styled from './index.less';

// const Circle = ({ children, ...restProps }: React.PropsWithChildren) => {
//   return (
//     <div {...restProps} className={styled.circle}>
//       {children}
//     </div>
//   );
// };

// const handleGithubCLick = () => {
//   window.open('https://github.com/infiniflow/ragflow', 'target');
// };

const RightToolBar = () => {
  //   const { t } = useTranslate('common');
  //   const changeLanguage = useChangeLanguage();
  //   const { setTheme, theme } = useTheme();

  //   const {
  //     data: { language = 'English' },
  //   } = useFetchUserInfo();

  //   const handleItemClick: MenuProps['onClick'] = ({ key }) => {
  //     changeLanguage(key);
  //   };

  //   const items: MenuProps['items'] = LanguageList.map((x) => ({
  //     key: x,
  //     label: <span>{LanguageMap[x as keyof typeof LanguageMap]}</span>,
  //   })).reduce<MenuProps['items']>((pre, cur) => {
  //     return [...pre!, { type: 'divider' }, cur];
  //   }, []);

  //   const onMoonClick = React.useCallback(() => {
  //     setTheme('light');
  //   }, [setTheme]);
  //   const onSunClick = React.useCallback(() => {
  //     setTheme('dark');
  //   }, [setTheme]);

  return (
    <div className={styled.toolbarWrapper}>
      <Space wrap size={16}>
        {/* <Dropdown menu={{ items, onClick: handleItemClick }} placement="bottom">
          <Space className={styled.language}>
            <b>{t(camelCase(language))}</b>
            <DownOutlined />
          </Space>
        </Dropdown>
        <Circle>
          <GithubOutlined onClick={handleGithubCLick} />
        </Circle>
        <Circle>
          {theme === 'dark' ? (
            <MoonIcon onClick={onMoonClick} size={20} />
          ) : (
            <SunIcon onClick={onSunClick} size={20} />
          )}
        </Circle> */}
        <User></User>
      </Space>
    </div>
  );
};

export default RightToolBar;
