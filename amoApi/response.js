const leads = [
    {
      id: 1593595,
      name: "Рекламная продукция",
      price: 11000,
      responsible_user_id: 6766063,
      group_id: 0,
      status_id: 38046913,
      pipeline_id: 3998857,
      loss_reason_id: null,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652354,
      updated_at: 1613652354,
      closed_at: null,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: null,
      score: null,
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/leads/1593595",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 1593885,
      name: "Подключение сервиса",
      price: 564648,
      responsible_user_id: 6766063,
      group_id: 0,
      status_id: 38046916,
      pipeline_id: 3998857,
      loss_reason_id: null,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652711,
      updated_at: 1613652725,
      closed_at: null,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: null,
      score: null,
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/leads/1593885",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 1593735,
      name: "Запрос тарифов",
      price: 356000,
      responsible_user_id: 6766063,
      group_id: 0,
      status_id: 38046913,
      pipeline_id: 3998857,
      loss_reason_id: null,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652517,
      updated_at: 1614165290,
      closed_at: null,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: null,
      score: null,
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/leads/1593735",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 1593943,
      name: "Продвижение",
      price: 1000000,
      responsible_user_id: 6766063,
      group_id: 0,
      status_id: 38046919,
      pipeline_id: 3998857,
      loss_reason_id: null,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652777,
      updated_at: 1614182911,
      closed_at: null,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: null,
      score: null,
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/leads/1593943",
        },
      },
      _embedded: {
        tags: [
          {
            id: 31293,
            name: "ТЭГ",
          },
          {
            id: 31315,
            name: "тег для тестирования",
          },
        ],
        companies: [],
      },
    },
    {
      id: 1593813,
      name: "Продвижение",
      price: 325678,
      responsible_user_id: 6766063,
      group_id: 0,
      status_id: 38046913,
      pipeline_id: 3998857,
      loss_reason_id: null,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652621,
      updated_at: 1614185043,
      closed_at: null,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: null,
      score: null,
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/leads/1593813",
        },
      },
      _embedded: {
        tags: [
          {
            id: 31463,
            name: "333333333333",
          },
        ],
        companies: [],
      },
    },
    {
      id: 1593637,
      name: "Настройка аккаунта",
      price: 350000,
      responsible_user_id: 6766063,
      group_id: 0,
      status_id: 38046913,
      pipeline_id: 3998857,
      loss_reason_id: null,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652416,
      updated_at: 1614185062,
      closed_at: null,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: null,
      score: null,
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/leads/1593637",
        },
      },
      _embedded: {
        tags: [
          {
            id: 31463,
            name: "333333333333",
          },
        ],
        companies: [],
      },
    },
    {
      id: 1593553,
      name: "Запрос тарифов",
      price: 14000,
      responsible_user_id: 6766063,
      group_id: 0,
      status_id: 38046913,
      pipeline_id: 3998857,
      loss_reason_id: null,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652307,
      updated_at: 1614185073,
      closed_at: null,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: null,
      score: null,
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/leads/1593553",
        },
      },
      _embedded: {
        tags: [
          {
            id: 29417,
            name: "test tag",
          },
          {
            id: 31293,
            name: "ТЭГ",
          },
          {
            id: 31463,
            name: "333333333333",
          },
        ],
        companies: [],
      },
    },
  ]
const statuses = [
    {
      id: 38046910,
      name: "Неразобранное",
      sort: 10,
      is_editable: false,
      pipeline_id: 3998857,
      color: "#c1c1c1",
      type: 1,
      account_id: 29305399,
      _links: {
        self: {
          href:
            "https://tulevand.amocrm.ru/api/v4/leads/pipelines/3998857/statuses/38046910",
        },
      },
    },
    {
      id: 38046913,
      name: "Первичный контакт",
      sort: 20,
      is_editable: true,
      pipeline_id: 3998857,
      color: "#99ccff",
      type: 0,
      account_id: 29305399,
      _links: {
        self: {
          href:
            "https://tulevand.amocrm.ru/api/v4/leads/pipelines/3998857/statuses/38046913",
        },
      },
    },
    {
      id: 38046916,
      name: "Переговоры",
      sort: 30,
      is_editable: true,
      pipeline_id: 3998857,
      color: "#ffff99",
      type: 0,
      account_id: 29305399,
      _links: {
        self: {
          href:
            "https://tulevand.amocrm.ru/api/v4/leads/pipelines/3998857/statuses/38046916",
        },
      },
    },
    {
      id: 38046919,
      name: "Принимают решение",
      sort: 40,
      is_editable: true,
      pipeline_id: 3998857,
      color: "#ffcc66",
      type: 0,
      account_id: 29305399,
      _links: {
        self: {
          href:
            "https://tulevand.amocrm.ru/api/v4/leads/pipelines/3998857/statuses/38046919",
        },
      },
    },
    {
      id: 38046922,
      name: "Согласование договора",
      sort: 50,
      is_editable: true,
      pipeline_id: 3998857,
      color: "#ffcccc",
      type: 0,
      account_id: 29305399,
      _links: {
        self: {
          href:
            "https://tulevand.amocrm.ru/api/v4/leads/pipelines/3998857/statuses/38046922",
        },
      },
    },
    {
      id: 142,
      name: "Успешно реализовано",
      sort: 10000,
      is_editable: false,
      pipeline_id: 3998857,
      color: "#CCFF66",
      type: 0,
      account_id: 29305399,
      _links: {
        self: {
          href:
            "https://tulevand.amocrm.ru/api/v4/leads/pipelines/3998857/statuses/142",
        },
      },
    },
    {
      id: 143,
      name: "Закрыто и не реализовано",
      sort: 11000,
      is_editable: false,
      pipeline_id: 3998857,
      color: "#D5D8DB",
      type: 0,
      account_id: 29305399,
      _links: {
        self: {
          href:
            "https://tulevand.amocrm.ru/api/v4/leads/pipelines/3998857/statuses/143",
        },
      },
    },
  ]
const users = [
    {
      id: 6766063,
      name: "Андрей Александрович Тулев",
      email: "tulevand@gmail.com",
      lang: "ru",
      rights: {
        leads: {
          view: "A",
          edit: "A",
          add: "A",
          delete: "A",
          export: "A",
        },
        contacts: {
          view: "A",
          edit: "A",
          add: "A",
          delete: "A",
          export: "A",
        },
        companies: {
          view: "A",
          edit: "A",
          add: "A",
          delete: "A",
          export: "A",
        },
        tasks: {
          edit: "A",
          delete: "A",
        },
        mail_access: true,
        catalog_access: true,
        status_rights: null,
        is_admin: true,
        is_free: false,
        is_active: true,
        group_id: null,
        role_id: null,
      },
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/users/6766063/",
        },
      },
    },
  ]
const contacts = [
    {
      id: 2485661,
      name: "Карина Игнатова",
      first_name: "Карина",
      last_name: "Игнатова",
      responsible_user_id: 6766063,
      group_id: 0,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652307,
      updated_at: 1613652307,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: [
        {
          field_id: 461473,
          field_name: "Телефон",
          field_code: "PHONE",
          field_type: "multitext",
          values: [
            {
              value: "89454651541",
              enum_id: 246287,
              enum_code: "WORK",
            },
          ],
        },
        {
          field_id: 461475,
          field_name: "Email",
          field_code: "EMAIL",
          field_type: "multitext",
          values: [
            {
              value: "karina@ya.ru",
              enum_id: 246299,
              enum_code: "WORK",
            },
          ],
        },
      ],
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/contacts/2485661",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 2485707,
      name: "Иван Иванович",
      first_name: "Иван",
      last_name: "Иванович",
      responsible_user_id: 6766063,
      group_id: 0,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652354,
      updated_at: 1613652354,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: [
        {
          field_id: 461473,
          field_name: "Телефон",
          field_code: "PHONE",
          field_type: "multitext",
          values: [
            {
              value: "89565464123",
              enum_id: 246287,
              enum_code: "WORK",
            },
          ],
        },
        {
          field_id: 461475,
          field_name: "Email",
          field_code: "EMAIL",
          field_type: "multitext",
          values: [
            {
              value: "ivan@ya.ru",
              enum_id: 246299,
              enum_code: "WORK",
            },
          ],
        },
      ],
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/contacts/2485707",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 2485751,
      name: "Андрей Андреевич",
      first_name: "Андрей",
      last_name: "Андреевич",
      responsible_user_id: 6766063,
      group_id: 0,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652416,
      updated_at: 1613652416,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: [
        {
          field_id: 461473,
          field_name: "Телефон",
          field_code: "PHONE",
          field_type: "multitext",
          values: [
            {
              value: "89054561241",
              enum_id: 246287,
              enum_code: "WORK",
            },
          ],
        },
        {
          field_id: 461475,
          field_name: "Email",
          field_code: "EMAIL",
          field_type: "multitext",
          values: [
            {
              value: "andrey@ya.ru",
              enum_id: 246299,
              enum_code: "WORK",
            },
          ],
        },
      ],
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/contacts/2485751",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 2485859,
      name: "Александр Александрович",
      first_name: "Александр",
      last_name: "Александрович",
      responsible_user_id: 6766063,
      group_id: 0,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652517,
      updated_at: 1613652517,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: [
        {
          field_id: 461473,
          field_name: "Телефон",
          field_code: "PHONE",
          field_type: "multitext",
          values: [
            {
              value: "89054512556",
              enum_id: 246287,
              enum_code: "WORK",
            },
          ],
        },
        {
          field_id: 461475,
          field_name: "Email",
          field_code: "EMAIL",
          field_type: "multitext",
          values: [
            {
              value: "alexandr@ya.ru",
              enum_id: 246299,
              enum_code: "WORK",
            },
          ],
        },
      ],
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/contacts/2485859",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 2485927,
      name: "Тимур Тимурович",
      first_name: "Тимур",
      last_name: "Тимурович",
      responsible_user_id: 6766063,
      group_id: 0,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652621,
      updated_at: 1613652621,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: [
        {
          field_id: 461473,
          field_name: "Телефон",
          field_code: "PHONE",
          field_type: "multitext",
          values: [
            {
              value: "89654125451",
              enum_id: 246287,
              enum_code: "WORK",
            },
          ],
        },
        {
          field_id: 461475,
          field_name: "Email",
          field_code: "EMAIL",
          field_type: "multitext",
          values: [
            {
              value: "timur@ya.ru",
              enum_id: 246299,
              enum_code: "WORK",
            },
          ],
        },
      ],
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/contacts/2485927",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 2486069,
      name: "Антон Антонович",
      first_name: "Антон",
      last_name: "Антонович",
      responsible_user_id: 6766063,
      group_id: 0,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652711,
      updated_at: 1613652711,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: [
        {
          field_id: 461473,
          field_name: "Телефон",
          field_code: "PHONE",
          field_type: "multitext",
          values: [
            {
              value: "89065452455",
              enum_id: 246287,
              enum_code: "WORK",
            },
          ],
        },
        {
          field_id: 461475,
          field_name: "Email",
          field_code: "EMAIL",
          field_type: "multitext",
          values: [
            {
              value: "anton@ya.ru",
              enum_id: 246299,
              enum_code: "WORK",
            },
          ],
        },
      ],
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/contacts/2486069",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
    {
      id: 2488279,
      name: "Игнат Игнатович",
      first_name: "Игнат",
      last_name: "Игнатович",
      responsible_user_id: 6766063,
      group_id: 0,
      created_by: 6766063,
      updated_by: 6766063,
      created_at: 1613652777,
      updated_at: 1613652777,
      closest_task_at: null,
      is_deleted: false,
      custom_fields_values: [
        {
          field_id: 461473,
          field_name: "Телефон",
          field_code: "PHONE",
          field_type: "multitext",
          values: [
            {
              value: "89043604904",
              enum_id: 246287,
              enum_code: "WORK",
            },
          ],
        },
        {
          field_id: 461475,
          field_name: "Email",
          field_code: "EMAIL",
          field_type: "multitext",
          values: [
            {
              value: "ignat@ya.ru",
              enum_id: 246299,
              enum_code: "WORK",
            },
          ],
        },
      ],
      account_id: 29305399,
      _links: {
        self: {
          href: "https://tulevand.amocrm.ru/api/v4/contacts/2488279",
        },
      },
      _embedded: {
        tags: [],
        companies: [],
      },
    },
  ]