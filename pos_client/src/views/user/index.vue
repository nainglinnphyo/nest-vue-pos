<template>
  <div class="user-container">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleTab(activeName)">
      <el-tab-pane label="All Users" name="view">
        <div>
          <el-input v-model="searchValue" placeholder="Please input" style="width: 250px; float: right">
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </div>
        <div>
          <el-table
            border
            :data="usersData"
            style="width: 100%;background-color: #e9e3e3"
            highlight-current-row
          >
            <el-table-column align="center">
              <template slot="header">
                <span>user id</span>
              </template>
              <template slot-scope="{row}">
                <span>{{ row.userid }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center">
              <template slot="header">
                <span>User Name</span>
              </template>
              <template slot-scope="{row}">
                <span>{{ row.username }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center">
              <template slot="header">
                <span>Position</span>
              </template>
              <template slot-scope="{row}">
                <span>{{ row.position }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center">
              <template slot="header">
                <span>Email</span>
              </template>
              <template slot-scope="{row}">
                <span>{{ row.email }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center">
              <template slot="header">
                <span>Phone</span>
              </template>
              <template slot-scope="{row}">
                <span>{{ row.phone }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center">
              <template slot="header">
                <span>Created At</span>
              </template>
              <template slot-scope="{row}">
                <span>{{ row.createdAt }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center">
              <template slot="header">
                <span>Updated At</span>
              </template>
              <template slot-scope="{row}">
                <span>{{ row.updatedAt }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" width="200px">
              <template slot="header">
                <span>Operations</span>
              </template>
              <template slot-scope="{row}">
                <el-button size="mini" @click="updateUser(row)">update</el-button>
                <el-popconfirm
                  confirm-button-text="OK"
                  cancel-button-text="No, Thanks"
                  title="Are you sure to delete this?"
                  @onConfirm="deleteUser(row.id)"
                >
                  <el-button slot="reference" size="mini" type="danger">delete</el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            v-if="usersData.length > 0"
            :page-sizes="[10,20,30]"
            :page-size="pageSize"
            :page-index="pageIndex"
            layout="sizes, prev, pager, next"
            :total="totalCount"
            style="float:right;"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="Create User" name="create">
        <!--        <h3>Create Form</h3>-->

        <el-form ref="createForm" label-width="220px" style="width: 500px">
          <el-form-item label="Name" prop="name">
            <el-input v-model="userCreateForm.name" type="text" placeholder="user name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="User Id" prop="userId">
            <el-input v-model="userCreateForm.userId" type="text" placeholder="user id" autocomplete="off" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="createOk">Create</el-button>
            <el-button @click="createReset">Reset</el-button>
          </el-form-item>
        </el-form>

      </el-tab-pane>
      <el-tab-pane label="Update User" name="update" :disabled="true">
        <!--        <h3>Update Form</h3>-->

        <el-form ref="updateForm" label-width="220px" style="width: 500px">
          <el-form-item label="Name" prop="name">
            <el-input v-model="userUpdateForm.name" type="text" placeholder="user name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="User Id" prop="userId">
            <el-input v-model="userUpdateForm.userId" type="text" placeholder="user id" autocomplete="off" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="updateOk">Update</el-button>
            <el-button @click="updateReset">Reset</el-button>
          </el-form-item>
        </el-form>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as http from '@/utils/http'
export default {
  name: 'Index',
  data() {
    return {
      activeName: 'view',
      pageSize: 10,
      pageIndex: 1,
      usersData: [],
      totalCount: 0,
      userCreateForm: {
        name: '',
        userId: ''
      },
      userUpdateForm: {
        name: '',
        userId: ''
      },
      searchValue: ''
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      const params = {
        order: 'ASC',
        page: this.pageIndex,
        take: this.pageSize
      }
      const res = await http.sendForGet('users/users', params)
      this.usersData = res.data.data
      this.pageIndex = res.data.meta.page - 1
      this.pageSize = res.data.meta.take
      this.totalCount = res.data.meta.itemCount
      console.log('request', params)
      console.log('user data', JSON.stringify(res.data))
    },

    createOk() {

    },

    createReset() {

    },

    deleteUser(data) {
      console.log('delete', data)
    },

    updateOk() {

    },

    updateReset() {

    },

    updateUser(data) {
      console.log('update', data)
      this.userUpdateForm.name = data.username
      this.userUpdateForm.userId = data.userid
      this.handleTab('update')
    },

    handleSizeChange(val) {
      this.pageSize = val
      this.getUsers()
    },
    handleCurrentChange(val) {
      this.pageIndex = val
      this.getUsers()
    },

    handleTab(tab) {
      console.log(tab)
      this.activeName = tab
    }
  }
}
</script>

<style scoped>
  .user-container{
    margin: 30px;
  }

</style>
