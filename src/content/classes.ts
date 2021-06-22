const list: CharacterClass[] = [
  {
    id: 0,
    name: 'Воин',
    attributes: { strength: 2, perception: 1, endurance: 2, charisma: 0, intelligence: 0, agility: 2, luck: 0 },
    feature: 'В близости с союзником +1 к силе, выносливости и ловкости в бою. Раз в день +1 урон любым оружием.'
  },
  
  {
    id: 1,
    name: 'Варвар',
    attributes: { strength: 3, perception: 0, endurance: 2, charisma: 0, intelligence: 0, agility: 2, luck: 0 },
    feature: 'Раз в день +1 к атрибутам и входящий урон на 50% меньше.'
  },
  
  {
    id: 2,
    name: 'Паладин',
    attributes: { strength: 2, perception: 0, endurance: 3, charisma: 1, intelligence: 1, agility: 0, luck: 0 },
    feature: 'Действия против нежити, проклятых и демонических порождений с 1 преимуществом. Темная магия против паладина с 1 помехой.'
  },
  
  {
    id: 3,
    name: 'Рыцарь (знать)',
    attributes: { strength: 3, perception: 0, endurance: 2, charisma: 1, intelligence: 0, agility: 0, luck: 1 },
    feature: 'Слава набирается в 2 раза быстрее. Раз в день +1 преимущество на бой.'
  },
  
  {
    id: 4,
    name: 'Колдун',
    attributes: { strength: 0, perception: 2, endurance: 1, charisma: 0, intelligence: 4, agility: 0, luck: 0 },
    feature: '- 1 мана на заклинания. Заклинания против колдуна с 1 помехой.'
  },
  
  {
    id: 5,
    name: 'Боевой маг',
    attributes: { strength: 2, perception: 1, endurance: 1, charisma: 0, intelligence: 3, agility: 0, luck: 0 },
    feature: '-1 получения стихийного урона. Раз в день повышение маны на 50% на бой.'
  },
  
  {
    id: 6,
    name: 'Вор',
    attributes: { strength: 0, perception: 1, endurance: 0, charisma: 2, intelligence: 0, agility: 2, luck: 2 },
    feature: '1 преимущество на гибкость и освобождение.  Раз в день 1 преимущество на воровство.'
  },
  
  {
    id: 7,
    name: 'Ассасин',
    attributes: { strength: 1, perception: 1, endurance: 1, charisma: 1, intelligence: 0, agility: 3, luck: 0 },
    feature: '1 преимущество при атаке из скрытности. Эффект от ядов х2'
  },
  
  {
    id: 8,
    name: 'Охотник',
    attributes: { strength: 0, perception: 2, endurance: 1, charisma: 0, intelligence: 0, agility: 3, luck: 1 },
    feature: '+50% урона против животных. Раз в день +1 выносливости, ловкости, восприятия на бой.'
  },
  
  {
    id: 9,
    name: 'Бард',
    attributes: { strength: 0, perception: 1, endurance: 0, charisma: 3, intelligence: 1, agility: 1, luck: 1 },
    feature: '1 преимущество на общение с общение с противоположным полом. Раз в день воодушевление союзников на +1 к атрибутам на бой.'
  },
  
  {
    id: 10,
    name: 'Бродяга',
    attributes: { strength: 1, perception: 1, endurance: 1, charisma: 1, intelligence: 1, agility: 1, luck: 1 },
    feature: 'Раз в бой +4 к действию.'
  },
  
  {
    id: 11,
    name: 'Монах',
    attributes: { strength: 1, perception: 1, endurance: 2, charisma: 0, intelligence: 1, agility: 2, luck: 0 },
    feature: '2х эффект от божественных благословений. Раз в день медитация для +1 к атрибутам на бой.'
  },
  
  {
    id: 12,
    name: 'Вампир',
    attributes: { strength: 0, perception: 0, endurance: 0, charisma: 0, intelligence: 0, agility: 0, luck: 0 },
    feature: '1 урон от солнца за ход, +-4 диапазон сытости равен бонусу класса. Положительную сытость могут дать только высшие гуманоиды.'
  },
  
  {
    id: 13,
    name: 'Ведьмак',
    attributes: { strength:2, perception: 1, endurance: 2, charisma: 0, intelligence: 1, agility: 1, luck: 0 },
    feature: 'Зелья дают х2 эффект. Действия против монстров с 1 преимуществом.'
  },
  
  {
    id: 14,
    name: 'Дворянин (знать)',
    attributes: { strength: 2, perception: 0, endurance: 0, charisma: 2, intelligence: 2, agility: 1, luck: 0 },
    feature: '1 преимущество на общение с простолюдинами. +50% оплата.'
  },
  
  {
    id: 15,
    name: 'Друид',
    attributes: { strength: 1, perception: 2, endurance: 1, charisma: 0, intelligence: 2, agility: 1, luck: 0 },
    feature: '1 раз превращение в последнего убитого монстра или животное. Животные не атакуют первыми.'
  },
  
  {
    id: 16,
    name: 'Кузнец',
    attributes: { strength: 3, perception: 1, endurance: 2, charisma: 0, intelligence: 1, agility: 0, luck: 0 },
    feature: '1 преимущество на работу с оружием и снаряжением. Раз в день на бой +2 силы и выносливости.'
  },
  
  {
    id: 17,
    name: 'Разбойник',
    attributes: { strength: 1, perception: 2, endurance: 0, charisma: 0, intelligence: 0, agility: 2, luck: 2 },
    feature: '+1 преимущество в первый ход боя. +1 удачи, ловкости и восприятия при близости союзника в бою.'
  },
  
  {
    id: 18,
    name: 'Рабочий',
    attributes: { strength: 1, perception: 0, endurance: 3, charisma: 1, intelligence: 0, agility: 1, luck: 1 },
    feature: '1 преимущество когда здоровье меньше 50%. +1 к атрибутам в действиях против знати и преступников.'
  },
  
  {
    id: 19,
    name: 'Шут',
    attributes: { strength: 0, perception: 0, endurance: 0, charisma: 2, intelligence: 1, agility: 2, luck: 2 },
    feature: 'Раз в день принятие чужого обличия. Раз в день 1 помеха для противника.'
  },
];

export default list;