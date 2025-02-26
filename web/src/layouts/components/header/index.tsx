import { ReactComponent as FileIcon } from '@/assets/svg/file-management.svg';
import { ReactComponent as GraphIcon } from '@/assets/svg/graph.svg';
import { ReactComponent as KnowledgeBaseIcon } from '@/assets/svg/knowledge-base.svg';
import { useTranslate } from '@/hooks/common-hooks';
import { useFetchAppConf } from '@/hooks/logic-hooks';
import { useNavigateWithFromState } from '@/hooks/route-hook';
import { MessageOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Space, theme } from 'antd';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { useLocation } from 'umi';
import Toolbar from '../right-toolbar';

import { useTheme } from '@/components/theme-provider';
import styles from './index.less';

const { Header } = Layout;

const RagHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigateWithFromState();
  const { pathname } = useLocation();
  const { t } = useTranslate('header');
  const appConf = useFetchAppConf();
  const { theme: themeRag } = useTheme();
  const tagsData = useMemo(
    () => [
      { path: '/knowledge', name: t('knowledgeBase'), icon: KnowledgeBaseIcon },
      { path: '/chat', name: t('chat'), icon: MessageOutlined },
      { path: '/search', name: t('search'), icon: SearchOutlined },
      { path: '/flow', name: t('flow'), icon: GraphIcon },
      { path: '/file', name: t('fileManager'), icon: FileIcon },
    ],
    [t],
  );

  const currentPath = useMemo(() => {
    return (
      tagsData.find((x) => pathname.startsWith(x.path))?.name || 'knowledge'
    );
  }, [pathname, tagsData]);

  const handleChange = useCallback(
    (path: string): MouseEventHandler =>
      (e) => {
        e.preventDefault();
        navigate(path);
      },
    [navigate],
  );

  const handleLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Header
      style={{
        padding: '0 16px',
        background: colorBgContainer,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '72px',
        backgroundColor: '#121926',
      }}
    >
      <a href={window.location.origin} className="flex">
        <Space
          size={8}
          onClick={handleLogoClick}
          className={styles.logoWrapper}
        >
          <img src="/logo.svg" alt="" className={styles.appIcon} />
          <span className={styles.appName}>{appConf.appName}</span>
        </Space>
      </a>

      <div className="bg-[#202939] border-[#344054] border rounded-lg flex overflow-hidden">
        {tagsData.map((item, index) => (
          <div
            key={item.name}
            onClick={handleChange(item.path)}
            className={`px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#364152]
              ${pathname.startsWith(item.path) ? 'bg-[#364152]' : ''}
              ${index === 0 ? 'rounded-l-lg' : ''}
              ${index === tagsData.length - 1 ? 'rounded-r-lg' : ''}
            `}
          >
            <div className="flex items-center justify-center w-5 h-5">
              <item.icon
                className={`${pathname.startsWith(item.path) ? 'text-white' : 'text-[#98a1b2]'}`}
              />
            </div>
            <span
              className={`text-sm ${pathname.startsWith(item.path) ? 'text-white' : 'text-[#98a1b2]'}`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* <Space size={[0, 8]} wrap className="hidden">
        <Radio.Group
          defaultValue="a"
          buttonStyle="solid"
          className={
            themeRag === 'dark' ? styles.radioGroupDark : styles.radioGroup
          }
          value={currentPath}
        >
          {tagsData.map((item, index) => (
            <Radio.Button
              className={`${themeRag === 'dark' ? 'dark' : 'light'} ${index === 0 ? 'first' : ''} ${index === tagsData.length - 1 ? 'last' : ''}`}
              value={item.name}
              key={item.name}
            >
              <a href={item.path}>
                <Flex
                  align="center"
                  gap={8}
                  onClick={handleChange(item.path)}
                  className="cursor-pointer"
                >
                  <item.icon
                    className={styles.radioButtonIcon}
                    stroke={item.name === currentPath ? 'black' : 'white'}
                  ></item.icon>
                  {item.name}
                </Flex>
              </a>
            </Radio.Button>
          ))}
        </Radio.Group>
      </Space> */}
      <Toolbar></Toolbar>
    </Header>
  );
};

export default RagHeader;
