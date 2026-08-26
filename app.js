const palette = {
  root: '#0078d2',
  blue: '#32b4ff',
  orange: '#ffbd59',
  red: '#ff7479',
  bef: '#9ca3ff',
  purple: '#646cdf',
  teal: '#108e9c',
  green: '#12b47e',
  pink: '#ffc5c7',
  yellow: '#d2e058'
};

const clusters = [
  {
    id: 'blps',
    short: 'БЛПС',
    label: 'Блок логистики, переработки и сбыта',
    color: palette.blue,
    x: 312,
    y: 300,
    spread: 92,
    ringGap: 58,
    direction: -148,
    groups: [
      { label: 'Переработка нефти', brands: ['Нефтехимия', 'Биосфера', 'Smart Fuel', 'Полиом'] },
      { label: 'Логистика и сбыт', brands: ['Битлайт', 'Брит', 'Газпромнефть Ocean', 'G-Energy', 'Drive Café', 'SYNTOLUX', 'ОПТИ', 'Вебнефть', 'StartupDrive', 'G-Drive', 'DDA', 'Розетка', 'G-Lab', 'Mercapp', 'Техактив', 'Сеть АЗС «Газпромнефть»'] }
    ]
  },
  {
    id: 'bkss',
    short: 'БКССЗиИТ',
    label: 'Блок стратегии, капитального строительства, закупок и ИТ',
    color: palette.teal,
    x: 810,
    y: 286,
    spread: 90,
    ringGap: 60,
    direction: -34,
    groups: [
      { label: 'ИТ', brands: ['Consta', 'Профессионалы 4.0', 'N1', 'ИТ-полигон', 'АКПО', 'Линкон'] },
      { label: 'Снабжение', brands: ['iSource', 'Progress', 'Vector Logitech', 'Express Logitech', 'Inspector iSource', 'Academy iSource', 'Processor iSource', 'Terminal iSource', 'Reserve iSource', 'Graphic Logitech', 'Finance iSource', 'Inventory Logitech', 'Effect iSource', 'Industry iSource', 'Element iSource', 'Leancon', 'Logotech', 'Radar Logitech', 'Виджет Линк', 'Энерготехнофест'] }
    ]
  },
  {
    id: 'dkkrr',
    short: 'ДККРР',
    label: 'Департамент корпоративных коммуникаций и регионального развития',
    color: palette.red,
    x: 900,
    y: 600,
    spread: 82,
    ringGap: 58,
    direction: 18,
    groups: [
      {
        label: 'Коммуникации',
        brands: ['Инсайт', 'Брендлист', 'Нефтегазета', {
          label: 'Арктика Медиа',
          children: ['Тюмень 1', 'Ямал 1']
        }]
      },
      {
        label: 'Социальные инвестиции',
        brands: [{
          label: 'Родные города',
          children: [
            'Волонтёры Газпром нефти',
            'Хоккей для всех',
            'Научные лагеря',
            'Спорт во дворе',
            'Умножая таланты',
            'ШТОРМ',
            'Грантовый конкурс «Газпром нефти»',
            'Музыкальная мастерская Юрия Розума',
            'Чистая среда',
            'Родные музеи',
            'Кустендорф КЛАССИК',
            'Дни Эрмитажа в Сербии',
            'Водная среда',
            'Спортивный полюс',
            'МАСТЕРА',
            'Zajedno!',
            'ПикникХМ',
            'Зелёная среда',
            'Сказки Севера',
            'Математическая прогрессия',
            'Местные',
            'Полигон'
          ]
        }]
      }
    ]
  },
  {
    id: 'bgi',
    short: 'БГИ',
    label: 'Блок главного инженера',
    color: palette.orange,
    x: 310,
    y: 658,
    spread: 82,
    ringGap: 60,
    direction: 146,
    groups: [
      { label: 'Разведка и добыча', brands: ['Салым Петролеум', 'Актив будущего', 'Геобазис', 'КЕДР', 'Мессояханефтегаз', 'Южно-Приобский ГПЗ', 'Геонавигатор', 'Геосфера', 'Капитан', 'INDUSTRIX', 'Арктикгаз', 'Меретояханефтегаз'] },
      { label: 'Производственная безопасность', brands: ['Каркас безопасности'] }
    ]
  },
  {
    id: 'bef',
    short: 'БЭФ',
    label: 'Блок экономики и финансов',
    color: palette.bef,
    x: 994,
    y: 396,
    spread: 72,
    direction: 4,
    groups: [{ label: 'Экономика и финансы', brands: ['Эталон', 'CFO — школа директоров'] }]
  },
  {
    id: 'bpkiiv',
    short: 'БПКиИВ',
    label: 'Блок правовых, корпоративных и имущественных вопросов',
    color: palette.purple,
    x: 768,
    y: 698,
    spread: 82,
    direction: 68,
    groups: [{ label: 'Правовое сопровождение', brands: ['Цифраториум', 'Охтацентр', 'G-Drive Арена', 'Экспертные решения'] }]
  },
  {
    id: 'bbrp',
    short: 'ББРП',
    label: 'Блок безопасности и работы с персоналом',
    color: palette.green,
    x: 618,
    y: 764,
    spread: 68,
    direction: 91,
    groups: [{ label: 'Управление персоналом', brands: ['Корпоративный университет', 'Лига колледжей'] }]
  },
  {
    id: 'dov',
    short: 'ДОВ',
    label: 'Департамент по организационным вопросам',
    color: palette.pink,
    x: 496,
    y: 746,
    spread: 62,
    direction: 105,
    groups: [{ label: 'Организационное развитие', brands: ['Люди прогресса 2025'] }]
  },
  {
    id: 'dva',
    short: 'ДВА',
    label: 'Департамент внутреннего аудита',
    color: palette.yellow,
    x: 418,
    y: 674,
    spread: 58,
    direction: 132,
    groups: [{ label: 'Управление рисками', brands: ['Promine'] }]
  }
];

const objectCategories = [
  { id: 'company', label: 'Компания', color: '#32B4FF' },
  { id: 'subsidiary', label: 'Дочернее общество', color: '#90DDFF' },
  { id: 'joint-venture', label: 'Совместное предприятие', color: '#3B4195' },
  { id: 'center', label: 'Центр', color: '#646CDF' },
  { id: 'division', label: 'Структурное подразделение', color: '#056C77' },
  { id: 'community', label: 'Сообщество', color: '#24AFBE' },
  { id: 'product', label: 'Продукт', color: '#FFBD59' },
  { id: 'service', label: 'Услуга', color: '#FFE7BC' },
  { id: 'industrial', label: 'Производственный объект', color: '#9CA3FF' },
  { id: 'field', label: 'Месторождение', color: '#108E9C' },
  { id: 'transport', label: 'Транспортная инфраструктура', color: '#6AE0ED' },
  { id: 'network', label: 'Сеть', color: '#FF7479' },
  { id: 'system', label: 'Система', color: '#FFC5C7' },
  { id: 'technology', label: 'Технология', color: '#E8792E' },
  { id: 'technopark', label: 'Технопарк', color: '#1696DF' },
  { id: 'digital-product', label: 'Цифровой продукт', color: '#A1B018' },
  { id: 'media', label: 'СМИ', color: '#D2E058' },
  { id: 'digital-media', label: 'Цифровые медиа', color: '#00724C' },
  { id: 'films-books', label: 'Фильмы, книги', color: '#12B47E' },
  { id: 'slogan', label: 'Слоган', color: '#32B4FF' },
  { id: 'communication', label: 'Коммуникационная платформа', color: '#2F6FB0' },
  { id: 'strategy', label: 'Стратегия / программа', color: '#7A5AF8' },
  { id: 'project', label: 'Проект', color: '#C94F92' },
  { id: 'award', label: 'Награда / конкурс', color: '#E8792E' },
  { id: 'festival', label: 'Фестиваль / форум', color: '#4D8F77' }
];

const objectCategoryById = new Map(objectCategories.map(category => [category.id, category]));

const sphereCategories = [
  { id: 'corporate', label: 'Корпоративное управление', color: '#32B4FF' },
  { id: 'production', label: 'Производство', color: '#90DDFF' },
  { id: 'exploration', label: 'Разведка и добыча', color: '#3B4195' },
  { id: 'sales', label: 'Сбыт', color: '#646CDF' },
  { id: 'people', label: 'Персонал', color: '#056C77' },
  { id: 'finance', label: 'Финансы', color: '#24AFBE' },
  { id: 'logistics', label: 'Транспорт и логистика', color: '#FFBD59' },
  { id: 'media', label: 'Медиа и коммуникации', color: '#FFE7BC' },
  { id: 'safety', label: 'Производственная безопасность', color: '#9CA3FF' },
  { id: 'technology', label: 'Технологии и цифра', color: '#108E9C' },
  { id: 'education', label: 'Наука и образование', color: '#6AE0ED' },
  { id: 'sport', label: 'Спорт', color: '#FF7479' },
  { id: 'culture', label: 'Культура', color: '#FFC5C7' },
  { id: 'ecology', label: 'Экология', color: '#12B47E' }
];

const sphereCategoryById = new Map(sphereCategories.map(category => [category.id, category]));

function normalizeBrandKey(value) {
  return value.toLocaleLowerCase('ru')
    .replaceAll('ё', 'е')
    .replace(/[«»“”"'—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const knownObjectCategories = new Map(Object.entries({
  'Арктика Медиа': 'subsidiary',
  'Газпромнефть Битумные материалы': 'subsidiary',
  'Газпромнефть Шельф': 'subsidiary',
  'Газпромнефть Московский завод смазочных материалов': 'subsidiary',
  'Меретояханефтегаз': 'joint-venture',
  'Мессояханефтегаз': 'joint-venture',
  'Умножая таланты': 'project',
  'Promine': 'digital-product',
  'Энергия +': 'media',
  'Вебнефть': 'digital-media',
  'Полиом': 'joint-venture',
  'Родные города': 'strategy',
  'G-Energy': 'product',
  'INDUSTRIX': 'strategy',
  'Nedra Digital': 'digital-product',
  'PROНЕФТЬ': 'digital-product',
  'Smart Fuel': 'digital-product',
  'Selektum': 'digital-product',
  'SYNTOLUX': 'digital-product',
  'Волонтеры Газпром нефти': 'strategy',
  'Волонтёры Газпром нефти': 'strategy',
  'Родные музеи': 'strategy',
  'Математическая прогрессия': 'strategy',
  'Музыкальная мастерская Юрия Розума': 'project',
  'Грантовый конкурс Газпром нефти': 'strategy',
  'Грантовый конкурс «Газпром нефти»': 'strategy'
}).map(([label, categoryId]) => [normalizeBrandKey(label), categoryId]));

function getObjectCategory(label) {
  const key = normalizeBrandKey(label);
  const knownCategoryId = knownObjectCategories.get(key);
  if (knownCategoryId) return objectCategoryById.get(knownCategoryId);

  const inferredCategoryId = [
    [/газпром нефть$/, 'company'],
    [/тюмень 1|ямал 1|нефтегазета/, 'media'],
    [/эталон/, 'system'],
    [/инсайт|брендлист/, 'communication'],
    [/сеть азс|розетка/, 'network'],
    [/южно приобский гпз/, 'industrial'],
    [/арктикгаз|капитан/, 'field'],
    [/корпоративный университет|cfo|охтацентр/, 'center'],
    [/профессионалы 4\.0|лига колледжей|люди прогресса/, 'community'],
    [/энерготехнофест|кустендорф|дни эрмитажа/, 'festival'],
    [/сказки севера|местные/, 'films-books'],
    [/ит полигон/, 'technopark'],
    [/хоккей|научные лагеря|спорт во дворе|чистая среда|водная среда|спортивный полюс|мастера|zajedno|пикник|зеленая среда|шторм|полигон/, 'project'],
    [/g drive arena/, 'industrial'],
    [/каркас безопасности/, 'system'],
    [/n1|акпо|линкон|consta/, 'technology'],
    [/isource|logitech|leancon|logotech|виджет линк|progress|эффект|element|reserve|finance|inventory/, 'digital-product'],
    [/startupdrive|mercapp/, 'digital-media'],
    [/g drive|g lab|битлайт|брит|нефтехимия|биосфера|опти|dda|техактив|газпромнефть ocean/, 'product'],
    [/drive café|экспертные решения|геобазис|геосфера|геонавигатор|актив будущего|салым петролеум|кедр/, 'service'],
    [/цифраториум/, 'digital-product']
  ].find(([pattern]) => pattern.test(key))?.[1] || 'service';

  return objectCategoryById.get(inferredCategoryId);
}

function getSphereCategory(label, clusterId, group = '') {
  const key = normalizeBrandKey(label);
  const groupKey = normalizeBrandKey(group);
  const inferredSphereId = [
    [/чистая среда|водная среда|зеленая среда/, 'ecology'],
    [/хоккей|спорт во дворе|спортивный полюс|шторм|g drive arena|мастера/, 'sport'],
    [/родные музеи|эрмитаж|музыкальная мастерская|сказки севера|местные|zajedno|кустендорф|пикник/, 'culture'],
    [/научные лагеря|умножая таланты|математическая прогрессия|грантовый конкурс|лига колледжей/, 'education'],
    [/арктика медиа|тюмень 1|ямал 1|нефтегазета|инсайт|брендлист|вебнефть|startupdrive|mercapp/, 'media'],
    [/корпоративный университет|профессионалы 4\.0|люди прогресса/, 'people'],
    [/cfo|эталон|promine/, 'finance'],
    [/каркас безопасности/, 'safety'],
    [/terminal|reserve|inventory|logitech|logotech|leancon|линкон|закупки|складское хозяйство|логистика/, 'logistics'],
    [/isource|consta|n1|акпо|ит полигон|виджет линк|цифраториум|smart fuel|syntolux|g lab|industrix/, 'technology'],
    [/g drive|g energy|drive café|сеть азс|розетка|dda|опти|битлайт|брит|газпромнефть ocean|техактив/, 'sales'],
    [/нефтехимия|биосфера|полиом|южно приобский гпз/, 'production'],
    [/салым петролеум|актив будущего|геобазис|кедр|мессояханефтегаз|геонавигатор|геосфера|капитан|арктикгаз|меретояханефтегаз/, 'exploration'],
    [/волонтеры газпром нефти|волонтеры|родные города|экспертные решения|охтацентр/, 'corporate']
  ].find(([pattern]) => pattern.test(key))?.[1];

  if (inferredSphereId) return sphereCategoryById.get(inferredSphereId);
  if (clusterId === 'bgi' || groupKey === 'разведка и добыча') return sphereCategoryById.get('exploration');
  if (clusterId === 'blps') return sphereCategoryById.get(groupKey === 'переработка нефти' ? 'production' : 'sales');
  if (clusterId === 'bkss') return sphereCategoryById.get(groupKey === 'снабжение' ? 'logistics' : 'technology');
  if (clusterId === 'dkkrr') return sphereCategoryById.get(groupKey === 'коммуникации' ? 'media' : 'corporate');
  if (clusterId === 'bef') return sphereCategoryById.get('finance');
  if (clusterId === 'bbrp') return sphereCategoryById.get('people');
  if (groupKey === 'производственная безопасность') return sphereCategoryById.get('safety');
  return sphereCategoryById.get('corporate');
}

function getSphereCategoryIds(label, clusterId, group = '') {
  const key = normalizeBrandKey(label);
  const groupKey = normalizeBrandKey(group);
  if (clusterId === 'dkkrr' && groupKey === 'социальные инвестиции' && key === 'родные города') {
    return ['culture', 'sport', 'education'];
  }
  return [getSphereCategory(label, clusterId, group).id];
}

function getAllBrandDefinitions() {
  return clusters.flatMap(cluster => cluster.groups.flatMap(group => group.brands.flatMap(brand => {
    if (typeof brand === 'string') return [{ label: brand }];
    return [{ label: brand.label }, ...(brand.children || []).map(label => ({ label }))];
  })));
}

function buildTreeData(mode = 'departments') {
  const children = mode === 'objects'
    ? objectCategories.map(category => {
        const brands = getAllBrandDefinitions()
          .filter(brand => getObjectCategory(brand.label).id === category.id)
          .map(brand => ({ label: brand.label, color: category.color, brandLabel: brand.label }));
        return {
          label: category.label,
          color: category.color,
          groupedCategoryId: category.id,
          groupedCategoryType: 'object',
          children: sortTreeNodes(brands)
        };
      }).filter(category => category.children.length)
    : mode === 'spheres'
      ? sphereCategories.map(category => {
          const brands = getAllBrandDefinitions()
            .filter(brand => {
              const source = clusters.find(cluster => cluster.groups.some(group => group.brands.some(item => (
                typeof item === 'string'
                  ? item === brand.label
                  : item.label === brand.label || (item.children || []).includes(brand.label)
              ))));
              const sourceGroup = source?.groups.find(group => group.brands.some(item => (
                typeof item === 'string'
                  ? item === brand.label
                  : item.label === brand.label || (item.children || []).includes(brand.label)
              )))?.label || '';
              return getSphereCategoryIds(brand.label, source?.id, sourceGroup).includes(category.id);
            })
            .map(brand => ({ label: brand.label, color: category.color, brandLabel: brand.label }));
          return {
            label: category.label,
            color: category.color,
            groupedCategoryId: category.id,
            groupedCategoryType: 'sphere',
            children: sortTreeNodes(brands)
          };
        }).filter(category => category.children.length)
    : clusters.map(cluster => ({
        label: cluster.short,
        color: cluster.color,
        graphId: cluster.id,
        open: cluster.id === 'blps',
        children: sortTreeNodes(cluster.groups.flatMap(group =>
          group.brands.map(brand => brandToTreeNode(brand, cluster.color))
        ))
      }));

  return [{
    label: 'Газпром нефть',
    color: palette.root,
    graphId: 'root',
    open: true,
    children
  }];
}

function sortTreeNodes(items) {
  return items.sort((first, second) => first.label.localeCompare(second.label, 'ru'));
}

function brandToTreeNode(brand, color) {
  if (typeof brand === 'string') return { label: brand, color, brandLabel: brand };
  return {
    label: brand.label,
    color,
    brandLabel: brand.label,
    children: sortTreeNodes((brand.children || []).map(child => brandToTreeNode(child, color)))
  };
}

function renderTree(items, parent, depth = 0) {
  const list = document.createElement('ul');
  list.className = 'tree-list';

  items.forEach(item => {
    const entry = document.createElement('li');
    entry.className = `tree-item${item.open ? ' is-open' : ''}`;
    const row = document.createElement('button');
    row.className = 'tree-row';
    row.type = 'button';
    row.style.paddingLeft = `${8 + depth * 16}px`;
    row.dataset.clickable = String(Boolean(item.children || item.graphId || item.brandLabel));
    if (item.graphId) row.dataset.graphId = item.graphId;
    if (item.brandLabel) row.dataset.brandLabel = item.brandLabel;
    if (item.groupedCategoryId) row.dataset.groupedFocusId = getGroupedFocusId(item.groupedCategoryType, item.groupedCategoryId);
    row.title = item.label;
    row.innerHTML = `<span class="chevron ${item.children ? '' : 'is-empty'}"></span><span class="tree-dot" style="--dot:${item.color || '#8ca2b3'}"></span><span class="tree-label">${item.label}</span>`;

    row.addEventListener('click', () => {
      if (item.children) entry.classList.toggle('is-open');
      if (item.graphId) {
        setFocus(item.graphId, true);
        const graphNode = nodeById.get(item.graphId);
        if (graphNode) navigateToNode(graphNode);
      }
      if (item.brandLabel) {
        const brandNode = findBrandNode(item.brandLabel);
        if (brandNode) {
          setFocus(getNodeFocusId(brandNode), true);
          zoomToNode(brandNode);
          openDetailPanel(brandNode);
        }
      }
      if (item.groupedCategoryId) {
        const category = getGroupedCategory(item.groupedCategoryType, item.groupedCategoryId);
        closeDetailPanel();
        setGroupedCategoryFocus(item.groupedCategoryType, item.groupedCategoryId, true);
        if (category) zoomToNode(category.position, 1.55);
      }
    });
    row.addEventListener('mouseenter', () => {
      if (item.graphId) setFocus(item.graphId, false);
      if (item.brandLabel) {
        const brandNode = findBrandNode(item.brandLabel);
        if (brandNode) setFocus(getNodeFocusId(brandNode), false);
      }
      if (item.groupedCategoryId) setGroupedCategoryFocus(item.groupedCategoryType, item.groupedCategoryId, false);
    });
    row.addEventListener('mouseleave', () => (item.graphId || item.brandLabel || item.groupedCategoryId) && !pinnedId && clearFocus());
    entry.appendChild(row);

    if (item.children) {
      const children = document.createElement('div');
      children.className = 'tree-children';
      renderTree(item.children, children, depth + 1);
      entry.appendChild(children);
    }
    list.appendChild(entry);
  });

  parent.appendChild(list);
}

const tree = document.getElementById('tree');
const displayModeButton = document.getElementById('display-mode-button');
const displayModeValue = document.getElementById('display-mode-value');
const displayModeList = document.getElementById('display-mode-list');
const displayModeOptions = [...displayModeList.querySelectorAll('.display-mode-option')];
let displayMode = 'spheres';
let pinnedId = null;

function renderNavigationTree() {
  tree.replaceChildren();
  renderTree(buildTreeData(displayMode), tree);
}

function closeDisplayModeList() {
  displayModeList.hidden = true;
  displayModeButton.setAttribute('aria-expanded', 'false');
}

function openDisplayModeList() {
  displayModeList.hidden = false;
  displayModeButton.setAttribute('aria-expanded', 'true');
}

function selectDisplayMode(option) {
  displayMode = option.dataset.value;
  if (pinnedId?.startsWith('grouped:') && !pinnedId.startsWith(`grouped:${displayMode === 'objects' ? 'object' : displayMode === 'spheres' ? 'sphere' : 'department'}:`)) {
    pinnedId = null;
  }
  displayModeValue.textContent = option.textContent;
  displayModeOptions.forEach(item => {
    const isSelected = item === option;
    item.classList.toggle('is-selected', isSelected);
    item.setAttribute('aria-selected', String(isSelected));
  });
  closeDisplayModeList();
  renderNavigationTree();
  applyDisplayModeColors();
  const selectedNode = pinnedId ? nodeById.get(pinnedId) : null;
  if (selectedNode?.clusterId) markSelectedTreeBrand(selectedNode.label);
  displayModeButton.focus();
}

renderNavigationTree();
displayModeButton.addEventListener('click', () => {
  if (displayModeList.hidden) openDisplayModeList();
  else closeDisplayModeList();
});
displayModeButton.addEventListener('keydown', event => {
  if (event.key !== 'ArrowDown') return;
  event.preventDefault();
  openDisplayModeList();
  (displayModeOptions.find(option => option.dataset.value === displayMode) || displayModeOptions[0]).focus();
});
displayModeOptions.forEach((option, index) => {
  option.addEventListener('click', () => selectDisplayMode(option));
  option.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDisplayModeList();
      displayModeButton.focus();
      return;
    }
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    displayModeOptions[(index + direction + displayModeOptions.length) % displayModeOptions.length].focus();
  });
});
document.addEventListener('pointerdown', event => {
  if (!event.target.closest('.display-mode-control')) closeDisplayModeList();
});

const rootNode = { id: 'root', label: 'Газпром нефть', x: 581, y: 490, r: 10, color: palette.root, departmentColor: palette.root, font: 18, weight: 500 };
const nodes = [rootNode];
const edges = [];

function polarPoint(centerX, centerY, radius, angle) {
  const radians = angle * Math.PI / 180;
  return { x: centerX + Math.cos(radians) * radius, y: centerY + Math.sin(radians) * radius };
}

const circularOrder = ['blps', 'bkss', 'bef', 'dkkrr', 'bpkiiv', 'bbrp', 'dov', 'dva', 'bgi'];
const orderedClusters = circularOrder.map(id => clusters.find(cluster => cluster.id === id));
const sectorGap = 4;
const availableDegrees = 360 - sectorGap * orderedClusters.length;
const totalWeight = orderedClusters.reduce((sum, cluster) => {
  const brandCount = countClusterBrands(cluster);
  return sum + Math.max(6, brandCount);
}, 0);
let sectorCursor = -174;

orderedClusters.forEach(cluster => {
  const brandCount = countClusterBrands(cluster);
  const sectorSize = availableDegrees * Math.max(6, brandCount) / totalWeight;
  cluster.sectorStart = sectorCursor + sectorGap / 2;
  cluster.sectorEnd = sectorCursor + sectorSize - sectorGap / 2;
  cluster.angle = (cluster.sectorStart + cluster.sectorEnd) / 2;
  const parentPoint = polarPoint(rootNode.x, rootNode.y, 182, cluster.angle);
  cluster.x = parentPoint.x;
  cluster.y = parentPoint.y;
  sectorCursor += sectorSize + sectorGap;
});

function countClusterBrands(cluster) {
  return cluster.groups.reduce((total, group) => total + group.brands.reduce((count, brand) => {
    if (typeof brand === 'string') return count + 1;
    return count + 1 + (brand.children || []).length;
  }, 0), 0);
}

function addClusterNodes(cluster) {
  nodes.push({ id: cluster.id, label: cluster.short, x: cluster.x, y: cluster.y, r: 7, color: cluster.color, departmentColor: cluster.color, objectCategory: objectCategoryById.get('division'), font: 12, weight: 500 });
  edges.push({ source: 'root', target: cluster.id, color: cluster.color });

  const topLevelBrands = cluster.groups.flatMap(group => group.brands.map(brand => ({
    label: typeof brand === 'string' ? brand : brand.label,
    children: typeof brand === 'string' ? [] : brand.children || [],
    group: group.label
  })));
  const nestedParents = topLevelBrands.filter(brand => brand.children.length);

  if (nestedParents.length) {
    addNestedClusterBrands(cluster, topLevelBrands);
    return;
  }

  const brands = topLevelBrands;
  const rings = getRingCounts(brands.length);
  let brandIndex = 0;

  rings.forEach((count, ringIndex) => {
    if (!count) return;
    const radius = rings.length === 1
      ? 346
      : rings.length === 2
        ? 260 + ringIndex * 90
        : 250 + ringIndex * 68;
    const ringInset = rings.length === 1 ? 1 : ringIndex * 0.7;
    const start = cluster.sectorStart + ringInset;
    const end = cluster.sectorEnd - ringInset;
    const step = count === 1 ? 0 : (end - start) / (count - 1);

    for (let index = 0; index < count; index += 1) {
      const brand = brands[brandIndex];
      const angle = count === 1 ? cluster.angle : start + index * step;
      const point = polarPoint(rootNode.x, rootNode.y, radius, angle);
      const id = `${cluster.id}-${brandIndex}`;
      nodes.push({
        id,
        label: brand.label,
        group: brand.group,
        clusterId: cluster.id,
        x: Math.max(24, Math.min(1138, point.x)),
        y: Math.max(24, Math.min(936, point.y)),
        r: 4.5,
        color: cluster.color,
        departmentColor: cluster.color,
        objectCategory: getObjectCategory(brand.label),
        sphereCategory: getSphereCategory(brand.label, cluster.id, brand.group),
        font: 8.5
      });
      edges.push({ source: cluster.id, target: id, color: cluster.color });
      brandIndex += 1;
    }
  });
}

function addNestedClusterBrands(cluster, topLevelBrands) {
  const totalWeight = topLevelBrands.reduce((sum, brand) => sum + Math.max(1, brand.children.length + 1), 0);
  const availableAngle = cluster.sectorEnd - cluster.sectorStart;
  let angleCursor = cluster.sectorStart;

  topLevelBrands.forEach((brand, topLevelIndex) => {
    const brandWeight = Math.max(1, brand.children.length + 1);
    const sliceSize = availableAngle * brandWeight / totalWeight;
    const sliceStart = angleCursor;
    const sliceEnd = angleCursor + sliceSize;
    const angle = (sliceStart + sliceEnd) / 2;
    const point = polarPoint(rootNode.x, rootNode.y, 250, angle);
    const isParentBrand = brand.children.length > 0;
    const id = isParentBrand
      ? `${cluster.id}-nested-parent-${topLevelIndex}`
      : `${cluster.id}-direct-${topLevelIndex}`;

    nodes.push({
      id,
      label: brand.label,
      group: brand.group,
      clusterId: cluster.id,
      isParentBrand,
      x: point.x,
      y: point.y,
      r: isParentBrand ? 6 : 4.5,
      color: cluster.color,
      departmentColor: cluster.color,
      objectCategory: getObjectCategory(brand.label),
      sphereCategory: getSphereCategory(brand.label, cluster.id, brand.group),
      font: isParentBrand ? 10 : 8.5,
      weight: isParentBrand ? 500 : 400
    });
    edges.push({ source: cluster.id, target: id, color: cluster.color });

    if (isParentBrand) {
      const childRings = brand.children.length > 12 ? [8, brand.children.length - 8] : [brand.children.length];
      let childIndex = 0;
      childRings.forEach((count, ringIndex) => {
        const radius = 318 + ringIndex * 68;
        const inset = Math.min(1.5, sliceSize * .08);
        const start = sliceStart + inset;
        const end = sliceEnd - inset;
        const step = count === 1 ? 0 : (end - start) / (count - 1);
        for (let index = 0; index < count; index += 1) {
          const label = brand.children[childIndex];
          const childAngle = count === 1 ? angle : start + index * step;
          const childPoint = polarPoint(rootNode.x, rootNode.y, radius, childAngle);
          const childId = `${id}-child-${childIndex}`;
          nodes.push({ id: childId, label, group: brand.label, clusterId: cluster.id, parentId: id, x: childPoint.x, y: childPoint.y, r: 4.5, color: cluster.color, departmentColor: cluster.color, objectCategory: getObjectCategory(label), sphereCategory: getSphereCategory(label, cluster.id, brand.group), font: 8.5 });
          edges.push({ source: id, target: childId, color: cluster.color });
          childIndex += 1;
        }
      });
    }

    angleCursor = sliceEnd;
  });
}

function getAnglesAroundCenter(count, start, end, center) {
  if (!count) return [];
  const available = [];
  const slots = count + 1;
  for (let index = 0; index < slots; index += 1) {
    const angle = start + (end - start) * index / Math.max(1, slots - 1);
    if (Math.abs(angle - center) > 1) available.push(angle);
  }
  return available.slice(0, count);
}

function getRingCounts(total) {
  if (total <= 8) return [total];
  if (total <= 14) return [5, total - 5];
  if (total <= 21) return [6, 7, total - 13];
  return [6, 8, total - 14];
}

clusters.forEach(addClusterNodes);
rootNode.objectCategory = objectCategoryById.get('company');
nodes.forEach(node => {
  node.departmentX = node.x;
  node.departmentY = node.y;
});

const objectBrandPositions = new Map();
const objectLayoutCategories = objectCategories.map(category => ({
  ...category,
  brands: nodes.filter(node => node.clusterId && node.objectCategory?.id === category.id)
})).filter(category => category.brands.length);

function prepareObjectLayout() {
  const gap = 3;
  const availableDegrees = 360 - gap * objectLayoutCategories.length;
  const totalWeight = objectLayoutCategories.reduce((sum, category) => sum + Math.max(12, category.brands.length), 0);
  let cursor = -174;

  objectLayoutCategories.forEach(category => {
    const sectorSize = availableDegrees * Math.max(12, category.brands.length) / totalWeight;
    category.sectorStart = cursor + gap / 2;
    category.sectorEnd = cursor + sectorSize - gap / 2;
    category.angle = (category.sectorStart + category.sectorEnd) / 2;
    const categoryPointAngle = category.angle + (category.id === 'industrial' ? -1.5 : category.id === 'field' ? 1.5 : 0);
    category.position = polarPoint(rootNode.x, rootNode.y, 182, categoryPointAngle);

    const rings = getObjectRingCounts(category.brands.length, sectorSize);
    let brandIndex = 0;
    rings.forEach((count, ringIndex) => {
      const radius = rings.length === 1 ? 350 : 340 + ringIndex * 74;
      const inset = Math.min(1.5, Math.max(.35, sectorSize * .06));
      const start = category.sectorStart + inset;
      const end = category.sectorEnd - inset;
      const step = count === 1 ? 0 : (end - start) / (count - 1);
      for (let index = 0; index < count; index += 1) {
        const node = category.brands[brandIndex];
        const angle = count === 1 ? category.angle : start + index * step;
        const point = polarPoint(rootNode.x, rootNode.y, radius, angle);
        objectBrandPositions.set(node.id, {
          x: Math.max(24, Math.min(1138, point.x)),
          y: Math.max(24, Math.min(936, point.y))
        });
        brandIndex += 1;
      }
    });

    cursor += sectorSize + gap;
  });
}

prepareObjectLayout();

const sphereBrandPositions = new Map();
const sphereLayoutCategories = sphereCategories.map(category => ({
  ...category,
  brands: nodes.filter(node => node.clusterId && getSphereCategoryIds(node.label, node.clusterId, node.group).includes(category.id))
})).filter(category => category.brands.length);

function prepareSphereLayout() {
  const gap = 3;
  const availableDegrees = 360 - gap * sphereLayoutCategories.length;
  const totalWeight = sphereLayoutCategories.reduce((sum, category) => sum + Math.max(10, category.brands.length), 0);
  let cursor = -174;

  sphereLayoutCategories.forEach(category => {
    const sectorSize = availableDegrees * Math.max(10, category.brands.length) / totalWeight;
    category.sectorStart = cursor + gap / 2;
    category.sectorEnd = cursor + sectorSize - gap / 2;
    category.angle = (category.sectorStart + category.sectorEnd) / 2;
    category.position = polarPoint(rootNode.x, rootNode.y, 182, category.angle);

    const rings = getObjectRingCounts(category.brands.length, sectorSize);
    let brandIndex = 0;
    rings.forEach((count, ringIndex) => {
      const radius = rings.length === 1 ? 350 : 338 + ringIndex * 72;
      const inset = Math.min(1.5, Math.max(.35, sectorSize * .06));
      const start = category.sectorStart + inset;
      const end = category.sectorEnd - inset;
      const step = count === 1 ? 0 : (end - start) / (count - 1);
      for (let index = 0; index < count; index += 1) {
        const node = category.brands[brandIndex];
        const angle = count === 1 ? category.angle : start + index * step;
        const rawPoint = polarPoint(rootNode.x, rootNode.y, radius, angle);
        const point = {
          x: Math.max(24, Math.min(1138, rawPoint.x)),
          y: Math.max(24, Math.min(936, rawPoint.y))
        };
        sphereBrandPositions.set(`${category.id}:${node.id}`, point);
        if (!sphereBrandPositions.has(node.id)) sphereBrandPositions.set(node.id, point);
        brandIndex += 1;
      }
    });

    cursor += sectorSize + gap;
  });
}

prepareSphereLayout();

function getObjectRingCounts(total, sectorSize) {
  const counts = [];
  let remaining = total;
  let ringIndex = 0;
  while (remaining > 0) {
    const radius = 340 + ringIndex * 74;
    const arcLength = radius * sectorSize * Math.PI / 180;
    const capacity = Math.max(1, Math.floor(arcLength / 22) + 1);
    const count = Math.min(remaining, capacity);
    counts.push(count);
    remaining -= count;
    ringIndex += 1;
  }
  return counts;
}

function getNodeDisplayColor(node) {
  if (node.id === 'root') return palette.root;
  if (displayMode === 'spheres') return node.sphereCategory?.color || sphereCategoryById.get('corporate').color;
  return displayMode === 'objects'
    ? node.objectCategory?.color || objectCategoryById.get('service').color
    : node.departmentColor;
}

function applyDisplayModeColors() {
  if (typeof nodeById === 'undefined') return;
  nodes.forEach(node => {
    node.color = getNodeDisplayColor(node);
    const circle = document.querySelector(`.node-group[data-id="${CSS.escape(node.id)}"] .node-dot`);
    if (circle) circle.setAttribute('fill', node.color);
  });
  applyDisplayModeLayout();
  if (!brandSearchResults.hidden) renderSearchResults();
  const selectedNode = pinnedId ? nodeById.get(pinnedId) : null;
  if (selectedNode && !brandLogoFiles[selectedNode.label]) detailLogoText.style.color = selectedNode.color;
}

function getStableBrandScore(label) {
  return [...label].reduce((score, character, index) => score + character.charCodeAt(0) * (index + 1), 0) % 10000;
}

function allocateClusterQuotas(clusterBrands, ratio, targetTotal) {
  const quotas = new Map();
  const remainders = [];

  clusterBrands.forEach((brands, clusterId) => {
    const ideal = brands.length * ratio;
    const quota = Math.min(brands.length, Math.max(1, Math.floor(ideal)));
    quotas.set(clusterId, quota);
    remainders.push({ clusterId, remainder: ideal - Math.floor(ideal), capacity: brands.length });
  });

  let assigned = [...quotas.values()].reduce((total, quota) => total + quota, 0);
  remainders.sort((first, second) => second.remainder - first.remainder);

  for (const candidate of remainders) {
    if (assigned >= targetTotal) break;
    if (quotas.get(candidate.clusterId) >= candidate.capacity) continue;
    quotas.set(candidate.clusterId, quotas.get(candidate.clusterId) + 1);
    assigned += 1;
  }

  if (assigned > targetTotal) {
    remainders.sort((first, second) => first.remainder - second.remainder);
    for (const candidate of remainders) {
      if (assigned <= targetTotal) break;
      if (quotas.get(candidate.clusterId) <= 1) continue;
      quotas.set(candidate.clusterId, quotas.get(candidate.clusterId) - 1);
      assigned -= 1;
    }
  }

  return quotas;
}

function assignBrandVisibilityTiers() {
  const brandNodes = nodes.filter(node => node.clusterId);
  const clusterBrands = new Map();
  brandNodes.forEach(node => {
    if (!clusterBrands.has(node.clusterId)) clusterBrands.set(node.clusterId, []);
    clusterBrands.get(node.clusterId).push(node);
  });

  const overviewQuotas = allocateClusterQuotas(clusterBrands, .7, Math.ceil(brandNodes.length * .7));
  const mediumQuotas = allocateClusterQuotas(clusterBrands, .85, Math.ceil(brandNodes.length * .85));

  clusterBrands.forEach((brands, clusterId) => {
    const rankedBrands = [...brands].sort((first, second) => {
      const firstImportance = (first.isParentBrand ? 1000000 : 0) + (!first.parentId ? 100000 : 0) + getStableBrandScore(first.label);
      const secondImportance = (second.isParentBrand ? 1000000 : 0) + (!second.parentId ? 100000 : 0) + getStableBrandScore(second.label);
      return secondImportance - firstImportance;
    });
    const overviewCount = overviewQuotas.get(clusterId);
    const mediumCount = mediumQuotas.get(clusterId);

    rankedBrands.forEach((node, index) => {
      node.visibilityTier = index < overviewCount ? 0 : index < mediumCount ? 1 : 2;
    });
  });
}

assignBrandVisibilityTiers();

const svg = document.getElementById('graph');
const namespace = 'http://www.w3.org/2000/svg';
const nodeById = new Map(nodes.map(node => [node.id, node]));
const semanticZoomToggle = document.getElementById('semantic-zoom-toggle');
const animationToggle = document.getElementById('animation-toggle');

const brandSearchInput = document.getElementById('brand-search-input');
const brandSearchClear = document.getElementById('brand-search-clear');
const brandSearchResults = document.getElementById('brand-search-results');
const searchableBrands = nodes
  .filter(node => node.clusterId)
  .sort((first, second) => first.label.localeCompare(second.label, 'ru'));
let currentSearchIndex = -1;
let visibleSearchResults = [];

function normalizeSearchValue(value) {
  return value.toLocaleLowerCase('ru').replaceAll('ё', 'е').trim();
}

function closeSearchResults() {
  brandSearchResults.hidden = true;
  brandSearchResults.replaceChildren();
  brandSearchInput.removeAttribute('aria-activedescendant');
  currentSearchIndex = -1;
  visibleSearchResults = [];
}

function selectSearchResult(node) {
  brandSearchInput.value = node.label;
  brandSearchClear.hidden = false;
  closeSearchResults();
  setFocus(getNodeFocusId(node), true);
  zoomToNode(node);
  openDetailPanel(node);
}

function setCurrentSearchResult(index) {
  const resultButtons = [...brandSearchResults.querySelectorAll('.brand-search-result')];
  if (!resultButtons.length) return;
  currentSearchIndex = (index + resultButtons.length) % resultButtons.length;
  resultButtons.forEach((button, buttonIndex) => {
    const isCurrent = buttonIndex === currentSearchIndex;
    button.classList.toggle('is-current', isCurrent);
    button.setAttribute('aria-selected', String(isCurrent));
  });
  const currentButton = resultButtons[currentSearchIndex];
  brandSearchInput.setAttribute('aria-activedescendant', currentButton.id);
  currentButton.scrollIntoView({ block: 'nearest' });
}

function renderSearchResults() {
  const query = normalizeSearchValue(brandSearchInput.value);
  brandSearchClear.hidden = !brandSearchInput.value;
  if (!query) {
    closeSearchResults();
    return;
  }

  visibleSearchResults = searchableBrands
    .filter(node => normalizeSearchValue(node.label).includes(query))
    .sort((first, second) => {
      const firstStarts = normalizeSearchValue(first.label).startsWith(query);
      const secondStarts = normalizeSearchValue(second.label).startsWith(query);
      return Number(secondStarts) - Number(firstStarts) || first.label.localeCompare(second.label, 'ru');
    })
    .slice(0, 12);

  brandSearchResults.replaceChildren();
  currentSearchIndex = -1;
  brandSearchInput.removeAttribute('aria-activedescendant');

  if (!visibleSearchResults.length) {
    const empty = document.createElement('div');
    empty.className = 'brand-search-empty';
    empty.textContent = 'Бренды не найдены';
    brandSearchResults.appendChild(empty);
  } else {
    visibleSearchResults.forEach((node, index) => {
      const button = document.createElement('button');
      button.id = `brand-search-result-${index}`;
      button.className = 'brand-search-result';
      button.type = 'button';
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', 'false');

      const dot = document.createElement('span');
      dot.className = 'brand-search-result-dot';
      dot.style.setProperty('--dot', node.color);
      const label = document.createElement('span');
      label.textContent = node.label;
      button.append(dot, label);
      button.addEventListener('mousedown', event => event.preventDefault());
      button.addEventListener('click', () => selectSearchResult(node));
      brandSearchResults.appendChild(button);
    });
  }

  brandSearchResults.hidden = false;
}

brandSearchInput.addEventListener('input', renderSearchResults);
brandSearchInput.addEventListener('focus', renderSearchResults);
brandSearchInput.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    if (!visibleSearchResults.length) return;
    event.preventDefault();
    setCurrentSearchResult(currentSearchIndex + (event.key === 'ArrowDown' ? 1 : -1));
  } else if (event.key === 'Enter' && visibleSearchResults.length) {
    event.preventDefault();
    selectSearchResult(visibleSearchResults[currentSearchIndex >= 0 ? currentSearchIndex : 0]);
  } else if (event.key === 'Escape') {
    const resultsWereOpen = !brandSearchResults.hidden;
    closeSearchResults();
    if (resultsWereOpen) event.stopPropagation();
  }
});
brandSearchClear.addEventListener('click', () => {
  brandSearchInput.value = '';
  brandSearchClear.hidden = true;
  closeSearchResults();
  brandSearchInput.focus();
});
document.addEventListener('pointerdown', event => {
  if (!event.target.closest('.brand-search')) closeSearchResults();
});

function createSvgElement(tag, attributes = {}) {
  const element = document.createElementNS(namespace, tag);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  return element;
}

function addWrappedLabel(group, node) {
  const text = createSvgElement('text', {
    class: 'node-label',
    x: node.x,
    y: node.y + node.r + (node.id === 'root' ? 23 : 15),
    'font-family': 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
    'font-size': node.font,
    'font-weight': node.weight || 400,
    fill: node.id === 'root' ? '#121a20' : node.font >= 12 ? '#243746' : '#002033',
    'text-anchor': 'middle'
  });

  const maxLength = node.font >= 12 ? 22 : 18;
  const words = node.label.split(' ');
  const lines = [''];
  words.forEach(word => {
    const current = lines[lines.length - 1];
    if (current && `${current} ${word}`.length > maxLength && lines.length < 2) lines.push(word);
    else lines[lines.length - 1] = current ? `${current} ${word}` : word;
  });

  lines.forEach((line, index) => {
    const tspan = createSvgElement('tspan', { x: node.x, dy: index === 0 ? 0 : 10 });
    tspan.textContent = line;
    text.appendChild(tspan);
  });
  group.appendChild(text);
}

const nonBreakingLabelWords = new Set([
  'а', 'без', 'в', 'во', 'для', 'до', 'за', 'и', 'из', 'к', 'ко', 'на', 'над',
  'но', 'о', 'об', 'от', 'по', 'под', 'при', 'с', 'со', 'у'
]);

function getTypographicLabelTokens(label) {
  const words = label.trim().split(/\s+/);
  const tokens = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const normalizedWord = word.toLocaleLowerCase('ru').replace(/[.,:;!?]/g, '');
    if (nonBreakingLabelWords.has(normalizedWord) && index + 1 < words.length) {
      tokens.push(`${word}\u00a0${words[index + 1]}`);
      index += 1;
    } else {
      tokens.push(word);
    }
  }
  return tokens;
}

function getTypographicLabel(label) {
  return getTypographicLabelTokens(label).join(' ');
}

const edgeLayer = createSvgElement('g', { class: 'edge-layer' });
edges.forEach((edge, index) => {
  const source = nodeById.get(edge.source);
  const target = nodeById.get(edge.target);
  const line = createSvgElement('line', {
    x1: source.x,
    y1: source.y,
    x2: target.x,
    y2: target.y,
    stroke: edge.color,
    class: 'edge'
  });
  line.dataset.source = edge.source;
  line.dataset.target = edge.target;
  line.dataset.index = index;
  const targetVisibilityTier = nodeById.get(edge.target)?.visibilityTier;
  if (targetVisibilityTier !== undefined) line.dataset.visibilityTier = targetVisibilityTier;
  edgeLayer.appendChild(line);
});
svg.appendChild(edgeLayer);

const nodeLayer = createSvgElement('g', { class: 'node-layer' });
const hoverLogoLayer = createSvgElement('g', { class: 'hover-logo-layer', 'aria-hidden': 'true' });
const hoverLogoCard = createSvgElement('g', { class: 'hover-logo-card' });
const hoverLogoSurface = createSvgElement('rect', { class: 'hover-logo-surface', width: 136, height: 136, rx: 4 });
const hoverLogoImage = createSvgElement('image', {
  class: 'hover-logo-image',
  x: 16,
  y: 16,
  width: 104,
  height: 104,
  preserveAspectRatio: 'xMidYMid meet'
});
hoverLogoCard.appendChild(hoverLogoSurface);
hoverLogoCard.appendChild(hoverLogoImage);
hoverLogoLayer.appendChild(hoverLogoCard);
nodes.forEach(node => {
  const group = createSvgElement('g', { class: 'node-group', tabindex: '0', role: 'button', 'aria-label': node.label });
  group.dataset.id = node.id;
  if (node.id !== 'root' && !node.clusterId) group.classList.add('is-cluster-node');
  if (node.clusterId) group.dataset.clusterId = node.clusterId;
  if (node.visibilityTier !== undefined) group.dataset.visibilityTier = node.visibilityTier;
  const hitArea = createSvgElement('circle', { class: 'node-hit-area', cx: node.x, cy: node.y, r: Math.max(12, node.r + 6), fill: 'transparent' });
  const circle = createSvgElement('circle', { class: 'node-dot', cx: node.x, cy: node.y, r: node.r, fill: node.color });
  circle.style.setProperty('--node-hover-radius', `${Math.max(7, node.r + 2)}px`);
  group.appendChild(hitArea);
  group.appendChild(circle);
  addWrappedLabel(group, node);
  nodeLayer.appendChild(group);

  group.addEventListener('mouseenter', event => {
    const hasLogo = showHoverLogo(node);
    if (hasLogo) hideTooltip();
    else showTooltip(event, node);
    setFocus(getNodeFocusId(node), false);
  });
  group.addEventListener('mousemove', event => {
    if (!brandLogoFiles[node.label]) showTooltip(event, node);
  });
  group.addEventListener('mouseleave', () => {
    hideHoverLogo();
    hideTooltip();
    if (!pinnedId) clearFocus();
  });
  group.addEventListener('click', () => {
    setFocus(getNodeFocusId(node), true);
    navigateToNode(node);
  });
  group.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setFocus(getNodeFocusId(node), true);
      navigateToNode(node);
    }
  });
});
svg.appendChild(nodeLayer);

const objectGraphLayer = createSvgElement('g', { class: 'object-graph-layer', 'aria-hidden': 'true' });
const objectEdgeLayer = createSvgElement('g', { class: 'object-edge-layer' });
const objectCategoryLayer = createSvgElement('g', { class: 'object-category-layer' });

objectLayoutCategories.forEach(category => {
  const categoryId = `object-category-${category.id}`;
  const rootLine = createSvgElement('line', {
    x1: rootNode.x,
    y1: rootNode.y,
    x2: category.position.x,
    y2: category.position.y,
    class: 'edge object-edge'
  });
  rootLine.dataset.categoryId = category.id;
  rootLine.dataset.target = categoryId;
  objectEdgeLayer.appendChild(rootLine);

  category.brands.forEach(node => {
    const point = objectBrandPositions.get(node.id);
    const line = createSvgElement('line', {
      x1: category.position.x,
      y1: category.position.y,
      x2: point.x,
      y2: point.y,
      class: 'edge object-edge'
    });
    line.dataset.categoryId = category.id;
    line.dataset.target = node.id;
    if (node.visibilityTier !== undefined) line.dataset.visibilityTier = node.visibilityTier;
    objectEdgeLayer.appendChild(line);
  });

  const group = createSvgElement('g', { class: 'object-category-group' });
  group.dataset.categoryId = category.id;
  const dot = createSvgElement('circle', {
    class: 'object-category-dot',
    cx: category.position.x,
    cy: category.position.y,
    r: 7,
    fill: category.color
  });
  const labelX = category.position.x;
  const labelY = category.position.y + 22;
  const labelAnchor = 'middle';
  const label = createSvgElement('text', {
    class: 'object-category-label',
    x: labelX,
    y: labelY,
    'font-family': 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
    'font-size': 9,
    'font-weight': 500,
    fill: '#002033',
    'text-anchor': labelAnchor
  });
  const words = getTypographicLabelTokens(category.label);
  const customLines = {
    communication: ['Коммуника-', 'ционная', 'платформа']
  };
  const lines = customLines[category.id] || [''];
  if (!customLines[category.id]) {
    words.forEach(word => {
      const current = lines[lines.length - 1];
      if (current && `${current} ${word}`.length > 12 && lines.length < 2) lines.push(word);
      else lines[lines.length - 1] = current ? `${current} ${word}` : word;
    });
  }
  lines.forEach((line, index) => {
    const tspan = createSvgElement('tspan', { x: labelX, dy: index === 0 ? 0 : 10 });
    tspan.textContent = line;
    label.appendChild(tspan);
  });
  group.append(dot, label);
  objectCategoryLayer.appendChild(group);
});

objectGraphLayer.append(objectEdgeLayer, objectCategoryLayer);
svg.insertBefore(objectGraphLayer, nodeLayer);

function createGroupedGraphLayer(type, categories, positions) {
  const graphLayer = createSvgElement('g', { class: `${type}-graph-layer`, 'aria-hidden': 'true' });
  const edgeLayer = createSvgElement('g', { class: `${type}-edge-layer` });
  const categoryLayer = createSvgElement('g', { class: `${type}-category-layer` });

  categories.forEach(category => {
    const categoryId = `${type}-category-${category.id}`;
    const rootLine = createSvgElement('line', {
      x1: rootNode.x,
      y1: rootNode.y,
      x2: category.position.x,
      y2: category.position.y,
      class: `edge ${type}-edge`
    });
    rootLine.dataset.categoryId = category.id;
    rootLine.dataset.target = categoryId;
    edgeLayer.appendChild(rootLine);

    category.brands.forEach(node => {
      const point = positions.get(node.id);
      const line = createSvgElement('line', {
        x1: category.position.x,
        y1: category.position.y,
        x2: point.x,
        y2: point.y,
        class: `edge ${type}-edge`
      });
      line.dataset.categoryId = category.id;
      line.dataset.target = node.id;
      if (node.visibilityTier !== undefined) line.dataset.visibilityTier = node.visibilityTier;
      edgeLayer.appendChild(line);
    });

    const group = createSvgElement('g', { class: `${type}-category-group` });
    group.dataset.categoryId = category.id;
    const dot = createSvgElement('circle', {
      class: `${type}-category-dot`,
      cx: category.position.x,
      cy: category.position.y,
      r: 7,
      fill: category.color
    });
    const labelX = category.position.x;
    const labelY = category.position.y + 22;
    const labelAnchor = 'middle';
    const label = createSvgElement('text', {
      class: `${type}-category-label`,
      x: labelX,
      y: labelY,
      'font-family': 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
      'font-size': 9,
      'font-weight': 500,
      fill: '#002033',
      'text-anchor': labelAnchor
    });
    const words = getTypographicLabelTokens(category.label);
    const lines = [''];
    words.forEach(word => {
      const current = lines[lines.length - 1];
      if (current && `${current} ${word}`.length > 18 && lines.length < 2) lines.push(word);
      else lines[lines.length - 1] = current ? `${current} ${word}` : word;
    });
    lines.forEach((line, index) => {
      const tspan = createSvgElement('tspan', { x: labelX, dy: index === 0 ? 0 : 10 });
      tspan.textContent = line;
      label.appendChild(tspan);
    });
    group.append(dot, label);
    categoryLayer.appendChild(group);
  });

  graphLayer.append(edgeLayer, categoryLayer);
  return graphLayer;
}

const sphereGraphLayer = createGroupedGraphLayer('sphere', sphereLayoutCategories, sphereBrandPositions);
svg.insertBefore(sphereGraphLayer, nodeLayer);
svg.appendChild(hoverLogoLayer);
document.fonts.ready.then(resolveLabelCollisions);

function attachGroupedCategoryInteractions(type, categories, graphLayer) {
  categories.forEach(category => {
    const group = graphLayer.querySelector(`.${type}-category-group[data-category-id="${category.id}"]`);
    if (!group) return;
    group.setAttribute('tabindex', '0');
    group.setAttribute('role', 'button');
    group.setAttribute('aria-label', category.label);
    group.addEventListener('mouseenter', () => setGroupedCategoryFocus(type, category.id, false));
    group.addEventListener('mouseleave', () => !pinnedId && clearFocus());
    group.addEventListener('click', () => {
      closeDetailPanel();
      setGroupedCategoryFocus(type, category.id, true);
      zoomToNode(category.position, 1.55);
    });
    group.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      closeDetailPanel();
      setGroupedCategoryFocus(type, category.id, true);
      zoomToNode(category.position, 1.55);
    });
  });
}

attachGroupedCategoryInteractions('object', objectLayoutCategories, objectGraphLayer);
attachGroupedCategoryInteractions('sphere', sphereLayoutCategories, sphereGraphLayer);

const nodeAnimationItems = nodes
  .filter(node => node.id !== 'root')
  .map(node => ({ node, group: document.querySelector(`.node-group[data-id="${CSS.escape(node.id)}"]`) }));
const departmentEdgeAnimationItems = edges.map((edge, index) => ({
  edge,
  line: edgeLayer.children[index],
  source: nodeById.get(edge.source),
  target: nodeById.get(edge.target)
}));

function getMotionVector(key, time, amplitude = 6) {
  const seed = [...key].reduce((value, character, index) => value + character.charCodeAt(0) * (index + 3), 0);
  const phase = seed * .017;
  return {
    x: Math.sin(time * .0008 + phase) * amplitude,
    y: Math.cos(time * .00065 + phase * 1.31) * amplitude
  };
}

function getGroupedAnimationItems(type, categories, graphLayer) {
  return categories.map(category => ({
    category,
    group: graphLayer.querySelector(`.${type}-category-group[data-category-id="${category.id}"]`),
    rootLine: graphLayer.querySelector(`.${type}-edge[data-target="${type}-category-${category.id}"]`),
    brandLines: category.brands.map(node => ({
      node,
      line: graphLayer.querySelector(`.${type}-edge[data-category-id="${category.id}"][data-target="${CSS.escape(node.id)}"]`)
    }))
  }));
}

const objectAnimationItems = getGroupedAnimationItems('object', objectLayoutCategories, objectGraphLayer);
const sphereAnimationItems = getGroupedAnimationItems('sphere', sphereLayoutCategories, sphereGraphLayer);
let ambientAnimationFrame = null;

function updateGroupedAnimation(items, time, active) {
  items.forEach(item => {
    const type = item.group?.classList.contains('object-category-group') ? 'object' : 'sphere';
    const categoryOffset = active ? getMotionVector(`${type}-category-${item.category.id}`, time, 5) : { x: 0, y: 0 };
    item.group?.setAttribute('transform', active ? `translate(${categoryOffset.x.toFixed(2)} ${categoryOffset.y.toFixed(2)})` : '');
    item.rootLine?.setAttribute('x2', item.category.position.x + categoryOffset.x);
    item.rootLine?.setAttribute('y2', item.category.position.y + categoryOffset.y);
    item.brandLines.forEach(({ node, line }) => {
      line?.setAttribute('x1', item.category.position.x + categoryOffset.x);
      line?.setAttribute('y1', item.category.position.y + categoryOffset.y);
      line?.setAttribute('x2', node.x + categoryOffset.x);
      line?.setAttribute('y2', node.y + categoryOffset.y);
    });
  });
}

function renderAmbientAnimation(time = 0) {
  const active = animationToggle.checked;
  svg.classList.toggle('is-ambient-animated', active);
  const nodeOffsets = new Map();

  nodeAnimationItems.forEach(({ node, group }) => {
    const category = displayMode === 'objects'
      ? node.objectCategory
      : displayMode === 'spheres'
        ? node.sphereCategory
        : null;
    const motionKey = category
      ? `${displayMode === 'objects' ? 'object' : 'sphere'}-category-${category.id}`
      : `department-${node.clusterId || node.id}`;
    const offset = active ? getMotionVector(motionKey, time, 5) : { x: 0, y: 0 };
    nodeOffsets.set(node.id, offset);
    if (active) group?.setAttribute('transform', `translate(${offset.x.toFixed(2)} ${offset.y.toFixed(2)})`);
    else group?.removeAttribute('transform');
  });

  departmentEdgeAnimationItems.forEach(({ line, source, target }) => {
    const sourceOffset = nodeOffsets.get(source.id) || { x: 0, y: 0 };
    const targetOffset = nodeOffsets.get(target.id) || { x: 0, y: 0 };
    line.setAttribute('x1', source.x + sourceOffset.x);
    line.setAttribute('y1', source.y + sourceOffset.y);
    line.setAttribute('x2', target.x + targetOffset.x);
    line.setAttribute('y2', target.y + targetOffset.y);
  });

  updateGroupedAnimation(objectAnimationItems, time, active);
  updateGroupedAnimation(sphereAnimationItems, time, active);

  if (active) ambientAnimationFrame = requestAnimationFrame(renderAmbientAnimation);
  else ambientAnimationFrame = null;
}

function setAmbientAnimationEnabled() {
  if (ambientAnimationFrame) cancelAnimationFrame(ambientAnimationFrame);
  ambientAnimationFrame = null;
  renderAmbientAnimation(performance.now());
}

function setNodePosition(node, point) {
  node.x = point.x;
  node.y = point.y;
  const group = document.querySelector(`.node-group[data-id="${CSS.escape(node.id)}"]`);
  if (!group) return;
  const hitArea = group.querySelector('.node-hit-area');
  const dot = group.querySelector('.node-dot');
  const label = group.querySelector('.node-label');
  hitArea?.setAttribute('cx', point.x);
  hitArea?.setAttribute('cy', point.y);
  dot?.setAttribute('cx', point.x);
  dot?.setAttribute('cy', point.y);
  if (!label) return;
  label.setAttribute('x', point.x);
  label.setAttribute('y', point.y + node.r + (node.id === 'root' ? 23 : 15));
  label.removeAttribute('transform');
  delete label.dataset.collisionTransform;
  label.querySelectorAll('tspan').forEach(tspan => tspan.setAttribute('x', point.x));
}

function applyDisplayModeLayout() {
  const isObjectMode = displayMode === 'objects';
  const isSphereMode = displayMode === 'spheres';
  svg.classList.toggle('is-object-mode', isObjectMode);
  svg.classList.toggle('is-sphere-mode', isSphereMode);
  objectGraphLayer.setAttribute('aria-hidden', String(!isObjectMode));
  sphereGraphLayer.setAttribute('aria-hidden', String(!isSphereMode));

  nodes.forEach(node => {
    if (node.id === 'root') return;
    const point = node.clusterId
      ? isObjectMode
        ? objectBrandPositions.get(node.id)
        : isSphereMode
          ? sphereBrandPositions.get(node.id)
          : { x: node.departmentX, y: node.departmentY }
      : { x: node.departmentX, y: node.departmentY };
    if (point) setNodePosition(node, point);
  });

  hideHoverLogo();
  hideTooltip();
  requestAnimationFrame(() => {
    resolveLabelCollisions();
    if (pinnedId) {
      setFocus(pinnedId, true);
      const selectedNode = nodeById.get(pinnedId);
      if (selectedNode) zoomToNode(selectedNode);
    } else {
      clearFocus();
      resetZoom();
    }
  });
}

function showHoverLogo(node) {
  const logoFile = brandLogoFiles[node.label];
  if (!logoFile) return false;

  const isGazpromNeft = node.label === 'Газпром нефть';
  const isCompactLogo = node.label === 'N1';
  const logoSize = node.label === 'Вебнефть'
    ? { x: 16, y: 59.9, width: 104, height: 16.1 }
    : node.label === 'Корпоративный университет'
      ? { x: 16, y: 53.2, width: 104, height: 29.5 }
      : null;
  const cardX = Math.min(Math.max(node.x - 68, 4), 1022);
  const preferredY = node.y - node.r - 148;
  const cardY = preferredY >= 4 ? preferredY : node.y + node.r + 12;
  hoverLogoCard.setAttribute('transform', `translate(${cardX} ${cardY})`);
  const defaultLogoSize = isGazpromNeft
    ? { x: 20.4, y: 40.3, width: 91.8, height: 44.9 }
    : isCompactLogo
      ? { x: 28, y: 28, width: 80, height: 80 }
      : { x: 16, y: 16, width: 104, height: 104 };
  const imageSize = logoSize || defaultLogoSize;
  hoverLogoImage.setAttribute('x', imageSize.x);
  hoverLogoImage.setAttribute('y', imageSize.y);
  hoverLogoImage.setAttribute('width', imageSize.width);
  hoverLogoImage.setAttribute('height', imageSize.height);
  hoverLogoImage.setAttribute('href', logoFile);
  hoverLogoCard.classList.add('is-visible');
  return true;
}

function hideHoverLogo() {
  hoverLogoCard.classList.remove('is-visible');
  hoverLogoImage.removeAttribute('href');
}

function resolveLabelCollisions() {
  const padding = 3;
  const margin = 6;
  const bounds = { width: 1162, height: 960 };
  const labels = [...document.querySelectorAll('.node-group .node-label')]
    .filter(label => nodeById.get(label.parentElement.dataset.id)?.font < 12)
    .map(label => ({ label, box: label.getBBox() }))
    .sort((first, second) => second.box.width * second.box.height - first.box.width * first.box.height);
  const dots = [...document.querySelectorAll('.node-group .node-dot')]
    .filter(dot => !['objects', 'spheres'].includes(displayMode) || !dot.closest('.is-cluster-node'))
    .map(dot => dot.getBBox());
  if (['objects', 'spheres'].includes(displayMode)) {
    document.querySelectorAll(`.${displayMode === 'objects' ? 'object' : 'sphere'}-category-dot`).forEach(dot => dots.push(dot.getBBox()));
  }
  const placed = ['objects', 'spheres'].includes(displayMode)
    ? [...document.querySelectorAll(`.${displayMode === 'objects' ? 'object' : 'sphere'}-category-label`)].map(label => label.getBBox())
    : [];

  const intersects = (first, second) => (
    first.x < second.x + second.width + padding
    && first.x + first.width + padding > second.x
    && first.y < second.y + second.height + padding
    && first.y + first.height + padding > second.y
  );

  labels.forEach(item => {
    const minimumShiftX = margin - item.box.x;
    const maximumShiftX = bounds.width - margin - item.box.x - item.box.width;
    const edgeShiftX = Math.max(minimumShiftX, Math.min(0, maximumShiftX));
    let position = null;

    for (let radius = 0; radius <= 180 && !position; radius += 6) {
      const verticalShifts = radius === 0 ? [0] : [radius, -radius];
      for (const shiftY of verticalShifts) {
        const candidate = {
          x: item.box.x + edgeShiftX,
          y: item.box.y + shiftY,
          width: item.box.width,
          height: item.box.height
        };
        const inside = candidate.x >= margin
          && candidate.y >= margin
          && candidate.x + candidate.width <= bounds.width - margin
          && candidate.y + candidate.height <= bounds.height - margin;

        if (!inside || dots.some(dot => intersects(candidate, dot)) || placed.some(label => intersects(candidate, label))) continue;
        position = { shiftX: edgeShiftX, shiftY, ...candidate };
        break;
      }
    }

    const resolved = position || {
      shiftX: 0,
      shiftY: 0,
      x: item.box.x,
      y: item.box.y,
      width: item.box.width,
      height: item.box.height
    };
    placed.push({ x: resolved.x, y: resolved.y, width: resolved.width, height: resolved.height });
    const collisionTransform = `translate(${resolved.shiftX.toFixed(2)} ${resolved.shiftY.toFixed(2)})`;
    item.label.dataset.collisionTransform = collisionTransform;
    item.label.setAttribute('transform', collisionTransform);
  });
}

function restoreLabelPosition(group) {
  const label = group.querySelector('.node-label');
  if (!label) return;
  if (label.dataset.collisionTransform) label.setAttribute('transform', label.dataset.collisionTransform);
}

function getNodeFocusId(node) {
  return node.id;
}

function findBrandNode(label) {
  return nodes.find(node => node.clusterId && node.label === label);
}

const baseViewBox = { x: 0, y: 0, width: 1162, height: 960 };
let currentViewBox = { ...baseViewBox };
let viewBoxAnimation = null;
const minZoom = 1;
const maxZoom = 3.2;

function navigateToNode(node) {
  if (node.id === 'root') {
    resetZoom();
    closeDetailPanel();
    return;
  }

  if (node.clusterId) {
    zoomToNode(node);
    openDetailPanel(node);
    return;
  }

  closeDetailPanel();
  setFocus(node.id, true);
  zoomToNode(node, 1.55);
}

function zoomToNode(node, zoom = 2.2) {
  const width = baseViewBox.width / zoom;
  const height = baseViewBox.height / zoom;
  const horizontalAnchor = node.clusterId ? .38 : .5;
  animateViewBox(constrainViewBox({
    x: node.x - width * horizontalAnchor,
    y: node.y - height * .5,
    width,
    height
  }));
}

function zoomBy(multiplier) {
  const currentZoom = baseViewBox.width / currentViewBox.width;
  const nextZoom = Math.max(minZoom, Math.min(maxZoom, currentZoom * multiplier));
  const width = baseViewBox.width / nextZoom;
  const height = baseViewBox.height / nextZoom;
  const centerX = currentViewBox.x + currentViewBox.width / 2;
  const centerY = currentViewBox.y + currentViewBox.height / 2;
  animateViewBox(constrainViewBox({ x: centerX - width / 2, y: centerY - height / 2, width, height }));
}

function zoomAtPoint(clientX, clientY, multiplier) {
  const rect = svg.getBoundingClientRect();
  const ratioX = (clientX - rect.left) / rect.width;
  const ratioY = (clientY - rect.top) / rect.height;
  const anchorX = currentViewBox.x + currentViewBox.width * ratioX;
  const anchorY = currentViewBox.y + currentViewBox.height * ratioY;
  const currentZoom = baseViewBox.width / currentViewBox.width;
  const nextZoom = Math.max(minZoom, Math.min(maxZoom, currentZoom * multiplier));
  const width = baseViewBox.width / nextZoom;
  const height = baseViewBox.height / nextZoom;
  currentViewBox = constrainViewBox({
    x: anchorX - width * ratioX,
    y: anchorY - height * ratioY,
    width,
    height
  });
  svg.setAttribute('viewBox', `${currentViewBox.x} ${currentViewBox.y} ${currentViewBox.width} ${currentViewBox.height}`);
  updateZoomButtons();
}

function resetZoom() {
  animateViewBox({ ...baseViewBox });
}

function constrainViewBox(box) {
  return {
    ...box,
    x: Math.max(0, Math.min(baseViewBox.width - box.width, box.x)),
    y: Math.max(0, Math.min(baseViewBox.height - box.height, box.y))
  };
}

function animateViewBox(target, duration = 480) {
  if (viewBoxAnimation) cancelAnimationFrame(viewBoxAnimation);
  const start = { ...currentViewBox };
  const startedAt = performance.now();

  const tick = now => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    currentViewBox = {
      x: start.x + (target.x - start.x) * eased,
      y: start.y + (target.y - start.y) * eased,
      width: start.width + (target.width - start.width) * eased,
      height: start.height + (target.height - start.height) * eased
    };
    svg.setAttribute('viewBox', `${currentViewBox.x} ${currentViewBox.y} ${currentViewBox.width} ${currentViewBox.height}`);
    updateZoomButtons();
    if (progress < 1) viewBoxAnimation = requestAnimationFrame(tick);
    else viewBoxAnimation = null;
  };

  viewBoxAnimation = requestAnimationFrame(tick);
}

function updateZoomButtons() {
  const zoom = baseViewBox.width / currentViewBox.width;
  document.getElementById('zoom-out').disabled = zoom <= minZoom + .01;
  document.getElementById('zoom-in').disabled = zoom >= maxZoom - .01;
  updateBrandVisibility(zoom);
}

function updateBrandVisibility(zoom) {
  const visibleTier = !semanticZoomToggle.checked ? 2 : zoom >= 1.8 ? 2 : zoom >= 1.3 ? 1 : 0;

  document.querySelectorAll('.node-group[data-visibility-tier]').forEach(group => {
    const isSelected = group.classList.contains('is-active') || group.classList.contains('is-connected');
    group.classList.toggle('is-zoom-hidden', Number(group.dataset.visibilityTier) > visibleTier && !isSelected);
  });

  document.querySelectorAll('.edge[data-visibility-tier]').forEach(edge => {
    const targetGroup = document.querySelector(`.node-group[data-id="${edge.dataset.target}"]`);
    const isSelected = targetGroup?.classList.contains('is-active') || targetGroup?.classList.contains('is-connected');
    edge.classList.toggle('is-zoom-hidden', Number(edge.dataset.visibilityTier) > visibleTier && !isSelected);
  });
}

document.getElementById('zoom-out').addEventListener('click', () => zoomBy(1 / 1.35));
document.getElementById('zoom-in').addEventListener('click', () => zoomBy(1.35));
semanticZoomToggle.addEventListener('change', () => updateBrandVisibility(baseViewBox.width / currentViewBox.width));
animationToggle.addEventListener('change', setAmbientAnimationEnabled);
updateZoomButtons();
setAmbientAnimationEnabled();

let panState = null;
let suppressNodeClick = false;

svg.addEventListener('pointerdown', event => {
  if (event.button !== 0) return;
  if (event.target.closest('.node-group, .object-category-group, .sphere-category-group')) return;
  if (viewBoxAnimation) cancelAnimationFrame(viewBoxAnimation);
  viewBoxAnimation = null;
  panState = {
    pointerId: event.pointerId,
    clientX: event.clientX,
    clientY: event.clientY,
    viewBox: { ...currentViewBox },
    moved: false
  };
});

svg.addEventListener('pointermove', event => {
  if (!panState || event.pointerId !== panState.pointerId) return;
  const deltaX = event.clientX - panState.clientX;
  const deltaY = event.clientY - panState.clientY;
  if (!panState.moved && Math.hypot(deltaX, deltaY) < 4) return;
  if (!panState.moved) svg.setPointerCapture(event.pointerId);
  panState.moved = true;
  suppressNodeClick = true;
  svg.classList.add('is-panning');
  const rect = svg.getBoundingClientRect();
  currentViewBox = constrainViewBox({
    ...panState.viewBox,
    x: panState.viewBox.x - deltaX * panState.viewBox.width / rect.width,
    y: panState.viewBox.y - deltaY * panState.viewBox.height / rect.height
  });
  svg.setAttribute('viewBox', `${currentViewBox.x} ${currentViewBox.y} ${currentViewBox.width} ${currentViewBox.height}`);
  event.preventDefault();
});

const finishPan = event => {
  if (!panState || event.pointerId !== panState.pointerId) return;
  const moved = panState.moved;
  panState = null;
  svg.classList.remove('is-panning');
  if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
  if (moved) setTimeout(() => { suppressNodeClick = false; }, 0);
};

svg.addEventListener('pointerup', finishPan);
svg.addEventListener('pointercancel', finishPan);
svg.addEventListener('wheel', event => {
  event.preventDefault();
  if (viewBoxAnimation) cancelAnimationFrame(viewBoxAnimation);
  viewBoxAnimation = null;
  zoomAtPoint(event.clientX, event.clientY, Math.exp(-event.deltaY * .0015));
}, { passive: false });

function getGroupedFocusId(type, categoryId) {
  return `grouped:${type}:${categoryId}`;
}

function getGroupedCategory(type, categoryId) {
  const categories = type === 'object' ? objectLayoutCategories : sphereLayoutCategories;
  return categories.find(category => category.id === categoryId);
}

function getGroupedFocusData(focusId) {
  if (!focusId?.startsWith('grouped:')) return null;
  const [, type, categoryId] = focusId.split(':');
  const category = getGroupedCategory(type, categoryId);
  return category ? { type, categoryId, category } : null;
}

function applyGroupedCategoryFocus(type, categoryId) {
  const category = getGroupedCategory(type, categoryId);
  if (!category) return clearFocus();
  const selectedBrandIds = new Set(category.brands.map(node => node.id));
  const focusId = getGroupedFocusId(type, categoryId);
  svg.classList.add('has-focus');
  document.querySelectorAll('.node-group').forEach(group => {
    const connected = group.dataset.id === 'root' || selectedBrandIds.has(group.dataset.id);
    group.classList.remove('is-active');
    group.classList.toggle('is-connected', connected);
    restoreLabelPosition(group);
  });
  document.querySelectorAll('.edge').forEach(line => line.classList.remove('is-connected'));
  document.querySelectorAll(`.${type}-category-group`).forEach(group => {
    const selected = group.dataset.categoryId === categoryId;
    group.classList.toggle('is-active', selected);
    group.classList.toggle('is-connected', selected);
  });
  document.querySelectorAll(`.${type}-edge`).forEach(line => {
    line.classList.toggle('is-connected', line.dataset.categoryId === categoryId);
  });
  document.querySelectorAll('.tree-row').forEach(row => {
    row.classList.toggle('is-active', row.dataset.groupedFocusId === focusId);
  });
  updateBrandVisibility(baseViewBox.width / currentViewBox.width);
}

function setGroupedCategoryFocus(type, categoryId, pin) {
  const requestedFocusId = getGroupedFocusId(type, categoryId);
  if (!pin && pinnedId && !getGroupedFocusData(pinnedId)) return setFocus(pinnedId, false);
  if (pin) pinnedId = requestedFocusId;
  const focusData = getGroupedFocusData(pinnedId || requestedFocusId);
  if (!focusData) return clearFocus();
  applyGroupedCategoryFocus(focusData.type, focusData.categoryId);
}

function getFocusPathIds(focusId) {
  const adjacency = new Map();
  edges.forEach(edge => {
    if (!adjacency.has(edge.source)) adjacency.set(edge.source, []);
    if (!adjacency.has(edge.target)) adjacency.set(edge.target, []);
    adjacency.get(edge.source).push(edge.target);
    adjacency.get(edge.target).push(edge.source);
  });

  const queue = ['root'];
  const previous = new Map([['root', null]]);
  while (queue.length) {
    const currentId = queue.shift();
    if (currentId === focusId) break;
    (adjacency.get(currentId) || []).forEach(nextId => {
      if (!previous.has(nextId)) {
        previous.set(nextId, currentId);
        queue.push(nextId);
      }
    });
  }

  if (!previous.has(focusId)) return new Set([focusId]);
  const pathIds = new Set();
  let currentId = focusId;
  while (currentId) {
    pathIds.add(currentId);
    currentId = previous.get(currentId);
  }
  return pathIds;
}

function getFocusSelectionIds(focusId) {
  const selectionIds = getFocusPathIds(focusId);
  const descendants = [focusId];
  const visited = new Set(descendants);

  while (descendants.length) {
    const sourceId = descendants.shift();
    edges.forEach(edge => {
      if (edge.source !== sourceId || visited.has(edge.target)) return;
      visited.add(edge.target);
      selectionIds.add(edge.target);
      descendants.push(edge.target);
    });
  }

  return selectionIds;
}

function setFocus(id, pin) {
  if (pin) pinnedId = id;
  const focusId = pin ? pinnedId : pinnedId || id;
  if (!focusId) return clearFocus();
  const groupedFocus = getGroupedFocusData(focusId);
  if (groupedFocus) return applyGroupedCategoryFocus(groupedFocus.type, groupedFocus.categoryId);

  const focusPathIds = getFocusSelectionIds(focusId);
  svg.classList.add('has-focus');
  document.querySelectorAll('.node-group').forEach(group => {
    const connected = focusPathIds.has(group.dataset.id);
    group.classList.toggle('is-active', group.dataset.id === focusId);
    group.classList.toggle('is-connected', connected);
    restoreLabelPosition(group);
  });
  document.querySelectorAll('.edge').forEach(line => {
    line.classList.toggle('is-connected', focusPathIds.has(line.dataset.source) && focusPathIds.has(line.dataset.target));
  });
  document.querySelectorAll('.tree-row').forEach(row => row.classList.toggle('is-active', row.dataset.graphId === focusId));
  if (displayMode === 'objects' || displayMode === 'spheres') {
    const type = displayMode === 'objects' ? 'object' : 'sphere';
    const categoryProperty = displayMode === 'objects' ? 'objectCategory' : 'sphereCategory';
    const selectedBrandIds = new Set([...focusPathIds].filter(nodeId => nodeById.get(nodeId)?.clusterId));
    const selectedCategoryIds = new Set([...selectedBrandIds].map(nodeId => nodeById.get(nodeId)?.[categoryProperty]?.id).filter(Boolean));
    document.querySelectorAll(`.${type}-category-group`).forEach(group => {
      group.classList.toggle('is-connected', selectedCategoryIds.has(group.dataset.categoryId));
    });
    document.querySelectorAll(`.${type}-edge`).forEach(line => {
      const categorySelected = selectedCategoryIds.has(line.dataset.categoryId);
      const isCategoryEdge = line.dataset.target === `${type}-category-${line.dataset.categoryId}`;
      line.classList.toggle('is-connected', categorySelected && (isCategoryEdge || selectedBrandIds.has(line.dataset.target)));
    });
  }
  updateBrandVisibility(baseViewBox.width / currentViewBox.width);
}

function clearFocus() {
  svg.classList.remove('has-focus');
  document.querySelectorAll('.is-active,.is-connected').forEach(element => element.classList.remove('is-active', 'is-connected'));
  document.querySelectorAll('.node-group').forEach(restoreLabelPosition);
  updateBrandVisibility(baseViewBox.width / currentViewBox.width);
}

const tooltip = document.getElementById('tooltip');

function showTooltip(event, node) {
  const cluster = node.clusterId ? clusters.find(item => item.id === node.clusterId) : clusters.find(item => item.id === node.id);
  tooltip.textContent = node.group
    ? `${getTypographicLabel(node.label)} · ${getTypographicLabel(node.group)}`
    : getTypographicLabel(cluster?.label || node.label);
  const panelRect = document.querySelector('.graph-panel').getBoundingClientRect();
  tooltip.style.left = `${Math.min(event.clientX - panelRect.left + 12, panelRect.width - 230)}px`;
  tooltip.style.top = `${Math.min(event.clientY - panelRect.top + 12, panelRect.height - 52)}px`;
  tooltip.style.display = 'block';
}

function hideTooltip() {
  tooltip.style.display = 'none';
}

const graphPanel = document.querySelector('.graph-panel');
const detailPanel = document.getElementById('detail-panel');
const detailClose = document.getElementById('detail-close');
const detailLogoImage = document.getElementById('detail-logo-image');
const detailLogoText = document.getElementById('detail-logo-text');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailExpand = document.getElementById('detail-expand');
const detailParent = document.getElementById('detail-parent');
const detailChildrenField = document.getElementById('detail-children-field');
const detailChildren = document.getElementById('detail-children');
const detailChildrenExpand = document.getElementById('detail-children-expand');
const detailTrademarks = document.getElementById('detail-trademarks');
const detailCategory = document.getElementById('detail-category');
const detailAudience = document.getElementById('detail-audience');
const detailEol = document.getElementById('detail-eol');
const detailContacts = document.getElementById('detail-contacts');

const brandDescriptionOverrides = {
  'G-Drive': 'Премиальный бренд высокотехнологичного автомобильного топлива «Газпром нефти». Бренд ориентирован на водителей, которые ценят динамику, мощность и высокие эксплуатационные характеристики автомобиля.',
  'G-Energy': 'Международный бренд моторных масел и технических жидкостей для легкового, коммерческого и промышленного транспорта. Продукты бренда разрабатываются для стабильной работы техники в разных режимах эксплуатации.',
  'Drive Café': 'Бренд придорожного питания на сети АЗС «Газпромнефть». Объединяет кофе, готовые блюда и удобный сервис для водителей в дороге.',
  'Smart Fuel': 'Технологический бренд решений для эффективного управления топливом. Помогает корпоративным клиентам контролировать заправки, расходы и использование автопарка.',
  'Полиом': 'Промышленный бренд современного производства полипропилена. Продукция используется в упаковке, строительстве, автомобилестроении и других отраслях.',
  'Нефтехимия': 'Бренд нефтехимического направления «Газпром нефти», объединяющий продукты и компетенции глубокой переработки углеводородного сырья.',
  'SYNTOLUX': 'Бренд синтетических базовых масел, предназначенных для производства современных смазочных материалов с высокими эксплуатационными характеристиками.',
  'Вебнефть': 'Цифровой бренд «Газпром нефти», объединяющий технологические продукты и онлайн-сервисы для сотрудников, партнёров и бизнес-процессов компании.',
  'G-Lab': 'Инновационная платформа для разработки, проверки и внедрения новых продуктов и клиентских решений в экосистеме «Газпром нефти».',
  'Родные города': 'Социальная программа «Газпром нефти». Развивает города присутствия компании через проекты в образовании, культуре, экологии и городской среде.',
  'Брендлист': 'Цифровая платформа управления портфелем брендов «Газпром нефти». Помогает систематизировать данные, связи, владельцев и товарные знаки компании.',
  'Волонтёры Газпром нефти': 'Корпоративное волонтёрское движение, которое объединяет сотрудников компании вокруг социальных, экологических и благотворительных инициатив.',
  'Хоккей для всех': 'Социальный спортивный проект, который делает хоккей доступнее для детей и поддерживает развитие массового спорта в регионах.',
  'Научные лагеря': 'Образовательный проект для школьников с практическими занятиями, исследованиями и знакомством с современными научными направлениями.',
  'Спорт во дворе': 'Проект развития доступной спортивной инфраструктуры и регулярных тренировок рядом с домом для детей и взрослых.',
  'Умножая таланты': 'Образовательная программа для школьников, которая помогает развивать инженерное, математическое и исследовательское мышление.',
  'ШТОРМ': 'Спортивный проект, поддерживающий командную подготовку, соревнования и активный образ жизни молодёжи в регионах.',
  'Грантовый конкурс «Газпром нефти»': 'Конкурс поддержки общественных инициатив, который помогает некоммерческим организациям и активным жителям реализовывать полезные региональные проекты.',
  'Музыкальная мастерская Юрия Розума': 'Культурно-образовательный проект, который поддерживает молодых музыкантов и помогает им развивать исполнительское мастерство.',
  'Чистая среда': 'Экологический проект по развитию ответственного отношения к городской и природной среде через волонтёрские акции и просветительские программы.',
  'Родные музеи': 'Программа поддержки региональных музеев, обновления экспозиций и создания современных культурных практик для местных сообществ.',
  'Кустендорф КЛАССИК': 'Международный культурный проект, объединяющий молодых музыкантов, известных исполнителей и образовательную программу.',
  'Дни Эрмитажа в Сербии': 'Международный культурный проект, знакомящий аудиторию с коллекциями, экспертами и просветительскими программами Государственного Эрмитажа.',
  'Водная среда': 'Экологический проект, направленный на сохранение водных ресурсов, благоустройство территорий и развитие экологической культуры.',
  'Спортивный полюс': 'Региональный спортивный проект, создающий возможности для тренировок, соревнований и развития массового спорта.',
  'МАСТЕРА': 'Программа развития креативных индустрий, которая помогает авторам и предпринимателям получать знания, поддержку и профессиональные связи.',
  'Zajedno!': 'Международный социально-культурный проект, объединяющий участников вокруг совместных образовательных и общественных инициатив.',
  'ПикникХМ': 'Городской культурный проект с открытой программой событий, музыки, творчества и семейного досуга.',
  'Зелёная среда': 'Экологическая инициатива по озеленению, благоустройству и вовлечению жителей в заботу о городской среде.',
  'Сказки Севера': 'Культурный проект, посвящённый наследию северных территорий, локальным историям и современному прочтению региональной культуры.',
  'Математическая прогрессия': 'Образовательная программа, которая поддерживает интерес школьников к математике и помогает развивать навыки решения сложных задач.',
  'Местные': 'Медиа- и общественный проект о людях, инициативах и культурной идентичности регионов присутствия компании.',
  'Полигон': 'Образовательная площадка для практических занятий, командной работы и тестирования новых социальных и культурных форматов.'
};

const groupDescriptionTemplates = {
  'Переработка нефти': name => `«${name}» — бренд направления переработки нефти и нефтехимии. Он представляет продукты, технологии или производственные компетенции блока логистики, переработки и сбыта.`,
  'Логистика и сбыт': name => `«${name}» — клиентский или технологический бренд блока логистики и сбыта. Он помогает развивать продукты, сервисы и взаимодействие с потребителями «Газпром нефти».`,
  'ИТ': name => `«${name}» — цифровой бренд блока стратегии и ИТ. Решение поддерживает развитие технологий, данных и автоматизации бизнес-процессов компании.`,
  'Снабжение': name => `«${name}» — продукт или сервис цифровой экосистемы снабжения. Он помогает повышать прозрачность, скорость и управляемость закупочных и логистических процессов.`,
  'Коммуникации': name => `«${name}» — коммуникационный или медиабренд «Газпром нефти». Он помогает рассказывать о проектах компании и выстраивать диалог с внутренней и внешней аудиторией.`,
  'Экономика и финансы': name => `«${name}» — бренд финансово-экономического направления. Он связан с развитием управленческих практик, экспертизы и корпоративных сервисов компании.`,
  'Разведка и добыча': name => `«${name}» — производственный или технологический бренд разведки и добычи. Он представляет актив, компетенцию или проект, связанный с разработкой месторождений.`,
  'Производственная безопасность': name => `«${name}» — проект производственной безопасности, направленный на развитие культуры безопасной работы и предупреждение рисков.`,
  'Правовое сопровождение': name => `«${name}» — бренд правового и корпоративного направления, объединяющий экспертные, инфраструктурные или общественные проекты блока.`,
  'Управление персоналом': name => `«${name}» — образовательный или кадровый бренд, который помогает развивать профессиональные компетенции и корпоративную культуру.`,
  'Организационное развитие': name => `«${name}» — проект организационного развития, поддерживающий современные подходы к управлению, взаимодействию и развитию команд.`,
  'Управление рисками': name => `«${name}» — решение направления внутреннего аудита и управления рисками, предназначенное для повышения прозрачности и качества контроля.`
};

const brandLogoFiles = {
  'Газпром нефть': 'assets/gazprom-neft.svg',
  'Биосфера': 'assets/biosfera.png',
  'Smart Fuel': 'assets/smart-fuel.png',
  'Полиом': 'assets/poliom.png',
  'G-Energy': 'assets/g-energy.png',
  'Drive Café': 'assets/drive-cafe.png',
  'SYNTOLUX': 'assets/syntolux.png',
  'Вебнефть': 'assets/webneft.svg',
  'StartupDrive': 'assets/startup-drive.png',
  'G-Drive': 'assets/g-drive.png',
  'DDA': 'assets/dda.png',
  'Consta': 'assets/consta.png',
  'Профессионалы 4.0': 'assets/professionals-4.png',
  'N1': 'assets/n1.png',
  'АКПО': 'assets/akpo.png',
  'Линкон': 'assets/lincon.png',
  'iSource': 'assets/isource.png',
  'Виджет Линк': 'assets/widget.png',
  'Энерготехнофест': 'assets/energytechnofest.png',
  'Инсайт': 'assets/insight.png',
  'Брендлист': 'assets/brandlist.png',
  'Нефтегазета': 'assets/neftegazeta.png',
  'Арктика Медиа': 'assets/arctic-media.png',
  'Тюмень 1': 'assets/tyumen.png',
  'Ямал 1': 'assets/yamal.png',
  'Родные города': 'assets/rodnye-goroda.png',
  'Волонтёры Газпром нефти': 'assets/volunteers.png',
  'Умножая таланты': 'assets/umnozhaya-talanty.png',
  'Грантовый конкурс «Газпром нефти»': 'assets/grant-contest.png',
  'Музыкальная мастерская Юрия Розума': 'assets/music-workshop.png',
  'Родные музеи': 'assets/rodnye-museums.png',
  'Кустендорф КЛАССИК': 'assets/kustendorf.png',
  'Дни Эрмитажа в Сербии': 'assets/hermitage-days.png',
  'Математическая прогрессия': 'assets/math-progression.png',
  'ШТОРМ': 'assets/storm.png',
  'Салым Петролеум': 'assets/salym.png',
  'Актив будущего': 'assets/aktiv-budushego.png',
  'Геобазис': 'assets/geobasis.png',
  'КЕДР': 'assets/kedr.png',
  'Мессояханефтегаз': 'assets/messoyakha.png',
  'Южно-Приобский ГПЗ': 'assets/yuzhno-pri.png',
  'Геонавигатор': 'assets/geonavigator.png',
  'Геосфера': 'assets/geosphere.png',
  'INDUSTRIX': 'assets/industrix.png',
  'Меретояханефтегаз': 'assets/meretoyakha.png',
  'Эталон': 'assets/etalon.png',
  'Цифраториум': 'assets/ciferhaus.png',
  'G-Drive Арена': 'assets/g-drive-arena.png',
  'Экспертные решения': 'assets/expert-solutions.png',
  'Корпоративный университет': 'assets/corporate-university.svg',
  'Promine': 'assets/promine.png'
};

function getBrandDescription(node, cluster) {
  if (brandDescriptionOverrides[node.label]) return brandDescriptionOverrides[node.label];
  if (node.parentId && nodeById.get(node.parentId)?.label === 'Родные города') {
    return `«${node.label}» — социальный проект программы «Родные города», направленный на развитие качества жизни, образования, культуры или городской среды в регионах присутствия компании.`;
  }
  const template = groupDescriptionTemplates[node.group];
  if (template) return template(node.label);
  return `«${node.label}» — бренд экосистемы «Газпром нефти». Он представляет отдельный продукт, проект или направление и связан с профильным блоком ${cluster?.short || 'компании'}.`;
}

function renderTrademarks(items) {
  detailTrademarks.replaceChildren();
  items.forEach((item, index) => {
    if (index > 0) {
      const dot = document.createElement('span');
      dot.className = 'detail-trademark-dot';
      dot.setAttribute('aria-hidden', 'true');
      detailTrademarks.appendChild(dot);
    }
    const label = document.createElement('span');
    label.textContent = item;
    detailTrademarks.appendChild(label);
  });
}

const rodnyeChildrenPreview = [
  'Волонтеры Газпром нефти',
  'Дай лапу',
  'Грантовый конкурс Газпром нефти',
  'Математическая прогрессия'
];

const mockBrandContacts = [
  { eol: 'И.А. Петров', contact: 'Petrov.IA@gazprom-neft.ru' },
  { eol: 'Е.С. Смирнова', contact: 'Smirnova.ES@gazprom-neft.ru' },
  { eol: 'Д.В. Кузнецов', contact: 'Kuznetsov.DV@gazprom-neft.ru' },
  { eol: 'М.А. Волкова', contact: 'Volkova.MA@gazprom-neft.ru' },
  { eol: 'А.С. Морозов', contact: 'Morozov.AS@gazprom-neft.ru' },
  { eol: 'О.В. Соколова', contact: 'Sokolova.OV@gazprom-neft.ru' },
  { eol: 'П.Н. Лебедев', contact: 'Lebedev.PN@gazprom-neft.ru' },
  { eol: 'Т.В. Новикова', contact: 'Novikova.TV@gazprom-neft.ru' },
  { eol: 'Р.А. Орлов', contact: 'Orlov.RA@gazprom-neft.ru' },
  { eol: 'Ю.В. Федорова', contact: 'Fedorova.YV@gazprom-neft.ru' }
];

const mockAudienceOptions = ['B2B', 'B2C', 'B2P', 'B2G', 'B2S'];

function getStableBrandHash(value) {
  return [...value].reduce((hash, character) => ((hash * 31) + character.codePointAt(0)) >>> 0, 0);
}

function getMockBrandDetails(node) {
  if (node.label === 'Родные города') {
    return {
      audience: 'B2C, B2B',
      eol: 'Н.В. Яровенко',
      contact: 'Yarovenko.NV@gazprom-neft.ru'
    };
  }

  const hash = getStableBrandHash(node.label);
  const contact = mockBrandContacts[hash % mockBrandContacts.length];
  const audienceCount = 1 + (Math.floor(hash / 7) % 3);
  const audienceStart = Math.floor(hash / 17) % mockAudienceOptions.length;
  const audience = Array.from(
    { length: audienceCount },
    (_, index) => mockAudienceOptions[(audienceStart + index * 2) % mockAudienceOptions.length]
  );

  return {
    audience: audience.join(', '),
    eol: contact.eol,
    contact: contact.contact
  };
}

function getRodnyeChildren(node) {
  const graphChildren = nodes.filter(child => child.parentId === node.id).map(child => child.label);
  return [...rodnyeChildrenPreview, ...graphChildren.filter(label => !rodnyeChildrenPreview.some(item => normalizeSearchValue(item) === normalizeSearchValue(label)))];
}

function getDetailChildren(node) {
  if (node.label === 'Родные города') return getRodnyeChildren(node);
  return nodes.filter(child => child.parentId === node.id).map(child => child.label);
}

function renderDetailChildren(items) {
  detailChildren.replaceChildren();
  if (!items.length) {
    detailChildren.textContent = '—';
    detailChildrenExpand.hidden = true;
    return;
  }
  detailChildrenExpand.hidden = items.length <= 4;
  items.forEach((item, index) => {
    const itemGroup = document.createElement('span');
    itemGroup.className = 'detail-child-item';

    const label = document.createElement('span');
    label.textContent = item;
    itemGroup.appendChild(label);

    if (index < items.length - 1) {
      const dot = document.createElement('span');
      dot.className = 'detail-trademark-dot';
      dot.setAttribute('aria-hidden', 'true');
      itemGroup.appendChild(dot);
    }

    detailChildren.appendChild(itemGroup);
  });
}

function openDetailPanel(node) {
  const cluster = clusters.find(item => item.id === node.clusterId);
  const parentNode = node.parentId ? nodeById.get(node.parentId) : null;
  const description = getBrandDescription(node, cluster);
  const isRodnyeCities = node.label === 'Родные города';
  const childBrands = getDetailChildren(node);
  const mockDetails = getMockBrandDetails(node);

  detailTitle.textContent = node.label;
  detailDescription.textContent = description;
  detailDescription.classList.remove('is-expanded');
  detailExpand.textContent = 'Показать все';
  detailExpand.hidden = true;
  detailParent.textContent = parentNode?.label || 'Газпром нефть';
  detailChildren.classList.remove('is-expanded');
  detailChildrenExpand.textContent = 'Показать все';
  detailChildrenField.hidden = childBrands.length === 0;
  renderDetailChildren(childBrands);
  renderTrademarks(node.label === 'G-Drive' ? ['G-Drive', 'Drive Café'] : [node.label]);
  detailCategory.textContent = node.objectCategory?.label || (isRodnyeCities ? 'Стратегия / программа' : 'Услуга');
  detailAudience.textContent = mockDetails.audience;
  detailEol.textContent = mockDetails.eol;
  detailContacts.textContent = mockDetails.contact;

  const logoFile = brandLogoFiles[node.label];
  if (logoFile) {
    detailLogoImage.src = logoFile;
    detailLogoImage.alt = node.label;
    detailLogoImage.classList.toggle('is-compact', node.label === 'N1');
    detailLogoImage.style.display = 'block';
    detailLogoText.style.display = 'none';
  } else {
    detailLogoImage.removeAttribute('src');
    detailLogoImage.alt = '';
    detailLogoImage.classList.remove('is-compact');
    detailLogoImage.style.display = 'none';
    detailLogoText.textContent = node.label;
    detailLogoText.style.color = node.color;
    detailLogoText.style.display = 'block';
  }

  graphPanel.classList.add('has-detail');
  detailPanel.classList.add('is-open');
  detailPanel.setAttribute('aria-hidden', 'false');
  markSelectedTreeBrand(node.label);
  requestAnimationFrame(() => {
    detailExpand.hidden = detailDescription.scrollHeight <= detailDescription.clientHeight + 1;
  });
}

function closeDetailPanel() {
  graphPanel.classList.remove('has-detail');
  detailPanel.classList.remove('is-open');
  detailPanel.setAttribute('aria-hidden', 'true');
  pinnedId = null;
  clearFocus();
  markSelectedTreeBrand(null);
}

function markSelectedTreeBrand(label) {
  let selectedRow = null;
  document.querySelectorAll('.tree-row[data-brand-label]').forEach(row => {
    const isSelected = row.dataset.brandLabel === label;
    row.classList.toggle('is-selected', isSelected);
    if (isSelected) selectedRow = row;
  });

  if (!selectedRow) return;
  selectedRow.closest('.tree-item')?.classList.add('is-open');
  selectedRow.closest('.tree-item')?.parentElement?.closest('.tree-item')?.classList.add('is-open');
  selectedRow.closest('.tree-item')?.parentElement?.closest('.tree-item')?.parentElement?.closest('.tree-item')?.classList.add('is-open');
  selectedRow.scrollIntoView({ block: 'nearest' });
}

detailClose.addEventListener('click', closeDetailPanel);
detailExpand.addEventListener('click', () => {
  const expanded = detailDescription.classList.toggle('is-expanded');
  detailExpand.textContent = expanded ? 'Свернуть' : 'Показать все';
});
detailChildrenExpand.addEventListener('click', () => {
  const expanded = detailChildren.classList.toggle('is-expanded');
  detailChildrenExpand.textContent = expanded ? 'Свернуть' : 'Показать все';
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeDetailPanel();
});
svg.addEventListener('click', event => {
  if (suppressNodeClick) return;
  if (event.target === svg) closeDetailPanel();
});

applyDisplayModeColors();
